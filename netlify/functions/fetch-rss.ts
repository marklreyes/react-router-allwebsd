import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

export const handler: Handler = async () => {
  const RSS_URL = "http://rss.castbox.fm/everest/cc803d4a973f4758b2eafb046573d642.xml";

  try {
    const response = await fetch(RSS_URL);
    const xmlData = await response.text();

    // Validate that we received XML data
    if (!xmlData.includes("<?xml") && !xmlData.includes("<rss")) {
      throw new Error("Invalid XML response");
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=300"
      },
      body: xmlData
    };
  } catch (error) {
    console.error("RSS fetch error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed fetching RSS feed",
        details: error instanceof Error ? error.message : "Unknown error"
      })
    };
  }
};
