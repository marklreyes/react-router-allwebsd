import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const RSS_URL = process.env.VITE_RSS_URL;

  if (!RSS_URL) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "RSS URL not configured",
        details: "Missing VITE_RSS_URL environment variable"
      })
    };
	}

  try {
    const response = await fetch(RSS_URL);

    if (!response.ok) {
      throw new Error(`RSS feed request failed with status ${response.status}`);
    }

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
