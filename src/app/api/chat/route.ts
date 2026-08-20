import { createGoogleGenerativeAI } from "@ai-sdk/google";
import {
  streamText,
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  generateId,
  type UIMessage,
} from "ai";

export const dynamic = "force-dynamic";

type ChatRequestBody = {
  messages?: UIMessage[];
};

const DEFAULT_MODEL = "gemini-3.5-flash-lite";
const DEFAULT_MAX_OUTPUT_TOKENS = 2048;
const DEFAULT_TEMPERATURE = 1;

function createFallbackStreamResponse(message: string): Response {
  const assistantMessageId = generateId();
  const textPartId = generateId();

  const stream = createUIMessageStream({
    execute: ({ writer }) => {
      writer.write({ type: "start", messageId: assistantMessageId });
      writer.write({ type: "text-start", id: textPartId });
      writer.write({ type: "text-delta", id: textPartId, delta: message });
      writer.write({ type: "text-end", id: textPartId });
      writer.write({ type: "finish", finishReason: "stop" });
    },
  });

  return createUIMessageStreamResponse({ stream });
}

export async function POST(request: Request): Promise<Response> {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Chat API error: Google Generative AI API key is not configured.");
      return createFallbackStreamResponse(
        "現在、AIチャット機能の初期設定が完了していません。APIキーの設定をご確認ください。",
      );
    }

    let body: ChatRequestBody = {};
    try {
      body = (await request.json()) as ChatRequestBody;
    } catch (parseError) {
      console.error("Chat API error: Failed to parse request body.", parseError);
      return createFallbackStreamResponse(
        "リクエストの解析に失敗しました。もう一度お試しください。",
      );
    }

    const { messages = [] } = body;

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

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API unexpected error:", error);
    return createFallbackStreamResponse(
      "申し訳ありません。メッセージの処理中にエラーが発生しました。しばらく経ってから再度お試しください。",
    );
  }
}
