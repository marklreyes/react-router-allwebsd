import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

export const handler: Handler = async () => {
  const RSS_URL = "https://rss.castbox.fm/everest/cc803d4a973f4758b2eafb046573d642.xml";

  try {
    const response = await fetch(RSS_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml",
        "Access-Control-Allow-Origin": "*"
      },
      body: data
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed fetching RSS feed",
        details: error instanceof Error ? error.message : "Unknown error occurred"
      })
    };
  }
};
