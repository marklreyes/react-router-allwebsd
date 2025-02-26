import type { Handler } from "@netlify/functions";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Netlify environment variable
});

const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_LENGTH = 10;

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not set");
    }

    const { messages } = JSON.parse(event.body || "{}");

    // Validate message format and length
    if (!messages || !Array.isArray(messages)) {
      throw new Error("Invalid messages format");
    }

    // Take only the last N messages to limit memory usage
    const recentMessages = messages.slice(-MAX_HISTORY_LENGTH);

    // Validate each message length
    const validatedMessages = recentMessages.map(msg => ({
      role: msg.role,
      content: msg.content.slice(0, MAX_MESSAGE_LENGTH)
    }));

		const completion = await openai.chat.completions.create({
			model: "gpt-4",
			messages: [
			{
				role: "system",
				content: "You are SanDieGPT, an AI assistant focused on San Diego, California."
			},
			...validatedMessages
			],
			max_tokens: 500
		});

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: completion.choices[0].message
      })
    };

  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error occurred",
        stack: process.env.NODE_ENV === "development" ? error instanceof Error ? error.stack : "" : undefined
      })
    };
  }
};
