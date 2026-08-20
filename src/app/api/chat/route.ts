import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, convertToModelMessages, generateId, type UIMessage } from "ai";
import { z } from "zod";

export const dynamic = "force-dynamic";

const DEFAULT_MODEL = "gemini-3.5-flash-lite";
const DEFAULT_MAX_OUTPUT_TOKENS = 2048;
const DEFAULT_TEMPERATURE = 1;

/**
 * クライアントから届くリクエストは一切信頼しない。
 * role を user / assistant のみに限定するのは、system ロールの混入を許すと
 * クライアントからシステムプロンプトを注入・上書きできてしまうため。
 * parts の中身は後段で text のみに絞り込むため、ここでは配列であることだけを検証する。
 */
const chatRequestSchema = z.object({
  messages: z.array(
    z.object({
      id: z.string().optional(),
      role: z.enum(["user", "assistant"]),
      parts: z.array(z.unknown()),
    }),
  ),
});

const textPartSchema = z.object({
  type: z.literal("text"),
  text: z.string().min(1),
});

type ParsedMessages = z.infer<typeof chatRequestSchema>["messages"];

/**
 * text 以外の part（step-start など、@ai-sdk/react が履歴として送り返してくるもの）を除去する。
 * 未知の part を拒否せず除去するのは、拒否するとマルチターンの会話が成立しなくなるため。
 */
function toTextOnlyMessages(parsedMessages: ParsedMessages): UIMessage[] {
  const messages: UIMessage[] = [];

  for (const message of parsedMessages) {
    const textParts: Array<{ type: "text"; text: string }> = [];

    for (const part of message.parts) {
      const result = textPartSchema.safeParse(part);
      if (result.success) {
        textParts.push({ type: "text", text: result.data.text });
      }
    }

    if (textParts.length === 0) continue;

    messages.push({
      id: message.id ?? generateId(),
      role: message.role,
      parts: textParts,
    });
  }

  return messages;
}

/**
 * ストリーム開始前のエラーはプレーンテキストで返す。
 * DefaultChatTransport は非 2xx のとき `new Error(await response.text())` を投げるため、
 * ここで返した本文がそのままクライアント側の error.message になる。
 */
function errorResponse(message: string, status: number): Response {
  return new Response(message, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export async function POST(request: Request): Promise<Response> {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Chat API error: Google Generative AI API key is not configured.");
      return errorResponse(
        "現在、AIチャット機能を利用できません。しばらく経ってから再度お試しください。",
        503,
      );
    }

    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch (parseError) {
      console.error("Chat API error: Failed to parse request body.", parseError);
      return errorResponse("リクエストの解析に失敗しました。もう一度お試しください。", 400);
    }

    const parsed = chatRequestSchema.safeParse(rawBody);
    if (!parsed.success) {
      console.error("Chat API error: Invalid request body.", parsed.error.issues);
      return errorResponse(
        "リクエストの形式が正しくありません。ページを再読み込みしてお試しください。",
        400,
      );
    }

    const messages = toTextOnlyMessages(parsed.data.messages);
    if (messages.length === 0) {
      return errorResponse("メッセージが空です。質問を入力してから送信してください。", 400);
    }

    const modelName = process.env.GEMINI_MODEL || DEFAULT_MODEL;
    const maxOutputTokens = process.env.GEMINI_MAX_OUTPUT_TOKENS
      ? parseInt(process.env.GEMINI_MAX_OUTPUT_TOKENS, 10)
      : DEFAULT_MAX_OUTPUT_TOKENS;

    const googleProvider = createGoogleGenerativeAI({ apiKey });

    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: googleProvider(modelName),
      messages: modelMessages,
      temperature: DEFAULT_TEMPERATURE,
      maxOutputTokens: Number.isNaN(maxOutputTokens) ? DEFAULT_MAX_OUTPUT_TOKENS : maxOutputTokens,
      onError: ({ error }) => {
        console.error("Chat API stream error:", error);
      },
    });

    // ストリーム開始後はヘッダ送出済みでステータスを変更できないため、
    // 途中で発生したエラーはストリームのエラーパートとして日本語メッセージを返す。
    return result.toUIMessageStreamResponse({
      onError: () =>
        "申し訳ありません。回答の生成中にエラーが発生しました。しばらく経ってから再度お試しください。",
    });
  } catch (error) {
    console.error("Chat API unexpected error:", error);
    return errorResponse(
      "申し訳ありません。メッセージの処理中にエラーが発生しました。しばらく経ってから再度お試しください。",
      500,
    );
  }
}
