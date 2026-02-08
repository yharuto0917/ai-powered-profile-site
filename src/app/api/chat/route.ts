import {
  createUIMessageStream,
  createUIMessageStreamResponse,
  generateId,
  type UIMessage,
} from "ai";

type ChatRequestBody = {
  messages?: UIMessage[];
};

function getLastUserText(messages: UIMessage[] | undefined): string | undefined {
  if (!messages?.length) return undefined;

  for (let i = messages.length - 1; i >= 0; i--) {
    const message = messages[i];
    if (message.role !== "user") continue;

    const text = message.parts
      .filter((part) => part.type === "text")
      .map((part) => part.text)
      .join("\n")
      .trim();

    if (text) return text;
  }

  return undefined;
}

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<Response> {
  let body: ChatRequestBody = {};
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    // If the request body is not valid JSON, fall back to an empty body.
  }

  const lastUserText = getLastUserText(body.messages);

  const demoReply =
    "現在『Ask Me With AI』はデモモードのため、AIチャット機能は利用できません。\n" +
    "（この API は固定のデモ返信を返しています）";

  const assistantMessageId = generateId();
  const textPartId = generateId();

  const stream = createUIMessageStream({
    execute: ({ writer }) => {
      writer.write({ type: "start", messageId: assistantMessageId });
      writer.write({ type: "text-start", id: textPartId });
      writer.write({ type: "text-delta", id: textPartId, delta: demoReply });
      writer.write({ type: "text-end", id: textPartId });
      writer.write({ type: "finish", finishReason: "stop" });
    },
  });

  return createUIMessageStreamResponse({ stream });
}
