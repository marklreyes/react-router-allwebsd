import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

export const handler: Handler = async () => {
  try {
    const response = await fetch("http://rss.castbox.fm/everest/cc803d4a973f4758b2eafb046573d642.xml");
    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml",
        "Access-Control-Allow-Origin": "*",
      },
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching RSS feed" }),
    };
  }
};
