import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import OpenAI from "openai";

// Add timeout constant
const TIMEOUT_DURATION = 8000; // 8 seconds (Netlify's limit is 10s)
const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_LENGTH = 6; // Reduced from 10 to limit context size
const MAX_TOKENS = 300; // Reduced from 500 to speed up response

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: TIMEOUT_DURATION,
  maxRetries: 2 // Add retry limit
});

// Add timeout promise
const timeoutPromise = (ms: number) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request timed out after ${ms}ms`));
    }, ms);
  });
};

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
    }

    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not set");
    }

    const { messages } = JSON.parse(event.body || "{}");

    if (!messages?.length) {
      throw new Error("Invalid messages format");
    }

    // Take only essential messages to reduce context
    const recentMessages = messages
      .slice(-MAX_HISTORY_LENGTH)
      .map((msg: { role: any; content: string; }) => ({
        role: msg.role,
        content: msg.content.slice(0, MAX_MESSAGE_LENGTH).trim()
      }));

    // Race between OpenAI call and timeout
    const completion = await Promise.race([
      openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are SanDieGPT, an AI assistant focused on information only on San Diego, California. Keep responses concise. Do not make up answers. Be helpful, informative yet playful."
          },
          ...recentMessages
        ],
        max_tokens: MAX_TOKENS,
        temperature: 0.7,
        presence_penalty: 0.6, // Encourage focused responses
        frequency_penalty: 0.5, // Reduce repetition
      }),
      timeoutPromise(TIMEOUT_DURATION)
    ]) as OpenAI.Chat.Completions.ChatCompletion;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "private, max-age=0, no-cache"
      },
      body: JSON.stringify({
        message: completion.choices[0].message
      })
    };

  } catch (error) {
    console.error("Error:", error);

    // Specific error handling
    const statusCode = error instanceof Error && error.message.includes("timed out") ?
      504 : // Gateway Timeout
      500;  // Internal Server Error

    return {
      statusCode,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error occurred",
        stack: process.env.NODE_ENV === "development" ? error instanceof Error ? error.stack : "" : undefined
      })
    };
  }
};
