import { Suspense, lazy } from 'react';
import { useParams, type LoaderFunctionArgs } from "react-router-dom";
import { useTheme } from "~/context/ThemeContext";
import { GiSadCrab } from "react-icons/gi";
import { TbLoader3 } from "react-icons/tb";
import { createSlug, formatDate, formatDuration } from "~/utils/formatters";
import { useRSSFeed } from "~/hooks/useRSSFeed";
import type { EpisodeMetaProps } from "~/types/episode";
import { XMLParser } from "fast-xml-parser";
import sanitizeHtml from 'sanitize-html';

// Lazy load components with error boundaries
const ShareButtons = lazy(() =>
  import("~/components/ShareButtons").then(module => ({
    default: module.default
  }))
);

const AudioPlayer = lazy(() =>
  import("~/components/AudioPlayer").then(module => ({
    default: module.default
  }))
);

const EpisodeContent = lazy(() =>
  import("~/components/EpisodeContent").then(module => ({
    default: module.default
  }))
);

// Update loader function with proper URL handling
export async function loader({ params }: LoaderFunctionArgs) {
  try {
    // Get base URL for development or production
    const baseUrl = process.env.NODE_ENV === "development"
      ? "http://localhost:8888"
      : "https://allwebsd.com"; // Replace with your Netlify domain

    const response = await fetch(`${baseUrl}/.netlify/functions/fetch-rss`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlData = await response.text();

    // Validate XML data
    if (!xmlData || !xmlData.includes("<rss")) {
      throw new Error("Invalid XML response");
    }

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_"
    });

    const result = parser.parse(xmlData);

    if (!result?.rss?.channel?.item) {
      throw new Error("Invalid RSS feed structure");
    }

    const episodes = result.rss.channel.item;
    if (!params.id) {
      throw new Error("Episode ID is required");
    }

    // Find episode by matching slugified title with URL param
    const episodeData = episodes.find((episode: any) =>
      createSlug(episode.title) === params.id
    );

    if (!episodeData) {
      throw new Error("Episode not found");
    }

    return {
      title: episodeData.title,
      content: episodeData["content:encoded"] || episodeData.description,
      created: new Date(episodeData.pubDate).getTime(),
      enclosures: episodeData.enclosure ? [{
        "@_length": episodeData.enclosure["@_length"],
        "@_type": episodeData.enclosure["@_type"],
        "@_url": episodeData.enclosure["@_url"]
      }] : [],
      itunes_duration: episodeData["itunes:duration"]
    };
  } catch (error) {
    console.error("Error in loader:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    throw new Response(errorMessage, { status: 404 });
  }
}

export function meta({ data, params }: EpisodeMetaProps) {
	const baseUrl = process.env.NODE_ENV === 'development'
		? 'http://localhost:8888'
		: 'https://allwebsd.com';

	if (!data) {
		return [
			{ title: "Episode Not Found | Web Developer storytelling out of America's Finest City | AllWebSD.com", override: true },
			{ name: "description", content: "The requested episode could not be found.", override: true },
			{ property: "og:image", content: `${baseUrl}/images/allwebsd-share.jpg`, override: true },
			{ name: "twitter:image", content: `${baseUrl}/images/allwebsd-share.jpg`, override: true }
		];
	}

	const cleanContent = sanitizeHtml(data.content, {
		allowedTags: [],
		allowedAttributes: {}
	}).substring(0, 160);

	return [
		{ title: `${data.title} | Web Developer storytelling out of America's Finest City | AllWebSD.com`, override: true },
		{ name: "description", content: cleanContent, override: true },
		{ property: "og:title", content: data.title, override: true },
		{ property: "og:description", content: cleanContent, override: true },
		{ property: "og:url", content: `${baseUrl}/episodes/${params.id}`, override: true },
		{ property: "og:image", content: `${baseUrl}/images/allwebsd-share.jpg`, override: true },
		{ name: "twitter:card", content: "summary_large_image", override: true },
		{ name: "twitter:title", content: data.title, override: true },
		{ name: "twitter:description", content: cleanContent, override: true },
		{ name: "twitter:image", content: `${baseUrl}/images/allwebsd-share.jpg`, override: true }
	];
}

export default function EpisodeDetails() {
  const { id } = useParams();
  const { theme, isDarkMode } = useTheme();
  const { episode, loading, error } = useRSSFeed(id);

  if (loading) {
    return (
      <div className={`${theme.primary} ${theme.text} flex items-center gap-2 p-4 rounded-lg p-6`}>
        <TbLoader3 className="animate-spin" /> Loading episode...
      </div>
    );
  }

  if (error || !episode) {
    return (
      <div className={`${theme.primary} ${theme.text} flex items-center gap-2 p-4 rounded-lg p-6`}>
        <GiSadCrab /> Error: {error || "Episode not found"}
      </div>
    );
  }

  return (
    <div className={`${theme.primary} ${theme.text} container mx-auto p-4 space-y-4 rounded-lg p-6`}>
      <h1
        className="text-2xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: episode.title }}
      />

      {episode.enclosures?.[0] && (
        <Suspense fallback={
          <div className="loading-fallback">
            <TbLoader3 className="animate-spin" /> Loading audio player...
          </div>
        }>
          <AudioPlayer enclosure={episode.enclosures[0]} />
        </Suspense>
      )}

      <p className="text-sm">
        <span className="font-semibold">Published: </span>
        {formatDate(episode.created)}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Duration: </span>
        {formatDuration(episode.itunes_duration)}
      </p>

      <Suspense fallback={
        <div className="loading-fallback">
          <TbLoader3 className="animate-spin" /> Loading share buttons...
        </div>
      }>
        <ShareButtons title={episode.title} url={window.location.href} />
      </Suspense>

      <hr className={`${isDarkMode ? "border-[#F03D86]" : "border-[#2F241D]"} mx-auto mt-4 mb-4`} />

      <Suspense fallback={
        <div className="loading-fallback">
          <TbLoader3 className="animate-spin" /> Loading episode content...
        </div>
      }>
        <EpisodeContent content={episode.content} />
      </Suspense>
    </div>
  );
}
