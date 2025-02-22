import { useParams, type LoaderFunctionArgs } from "react-router-dom";
import { useTheme } from "~/context/ThemeContext";
import { useEffect, useState } from "react";
import { GiSadCrab } from "react-icons/gi";
import { TbLoader3 } from "react-icons/tb";
import { XMLParser } from "fast-xml-parser";
import { ShareButtons } from '~/components/ShareButtons';

interface EpisodeData {
  title: string;
  content: string;
  created: number;
  enclosures: {
    "@_length": string;
    "@_type": string;
    "@_url": string;
  }[];
  itunes_duration: string;
}

// Add date formatting helper
const formatDate = (timestamp: number) => {
	const date = new Date(timestamp);
	return new Intl.DateTimeFormat("en-US", {
	  weekday: "long",
	  year: "numeric",
	  month: "long",
	  day: "numeric",
	  hour: "numeric",
	  minute: "2-digit",
	  hour12: true,
	  timeZone: "America/Los_Angeles"
	}).format(date);
};

// Add duration formatting helper
const formatDuration = (duration: string) => {
	// Handle byte length format
	if (/^\d+$/.test(duration)) {
		const seconds = Math.floor(parseInt(duration) / 1000);
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
	}

	// Handle HH:MM:SS format
	const timeComponents = duration.split(":");
	if (timeComponents.length === 3 && timeComponents[0] === "00") {
		return `${parseInt(timeComponents[1])}:${timeComponents[2]}`;
	}

	return duration;
};

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

    const episodeData = params.id ? episodes.find(
      (episode: any) => episode.guid["#text"] === decodeURIComponent(params.id as string)
    ) : undefined;

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

// Update meta function to use loader data
export function meta({ data, params }: { data: EpisodeData | undefined; params: { id: string } }) {
  // If no data, return default meta
  if (!data) {
    return [
      { title: "Episode Not Found | All WebSD Podcast" },
      { name: "description", content: "The requested episode could not be found." }
    ];
  }

  // Clean content for meta description (remove HTML tags and limit length)
  const cleanContent = data.content
    .replace(/<[^>]*>/g, "")
    .substring(0, 160);

  return [
    { title: `${data.title} | All WebSD Podcast` },
    { name: "description", content: cleanContent },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:title", content: data.title },
    { property: "og:type", content: "article" },
    { property: "og:url", content: `https://allwebsd.com/episodes/${params.id}` },
    { property: "og:description", content: cleanContent },
    { name: "twitter:title", content: data.title },
    { name: "twitter:description", content: cleanContent },
    { name: "article:published_time", content: new Date(data.created).toISOString() }
  ];
}

export default function EpisodeDetails() {
  const { id } = useParams();
  const { theme, isDarkMode } = useTheme();
  const [episode, setEpisode] = useState<EpisodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      setLoading(true);

      // Check cache first
      const cachedEpisode = localStorage.getItem(`episode-${id}`);
      const cacheTimestamp = localStorage.getItem(`episode-${id}-timestamp`);
      const cacheAge = cacheTimestamp ? Date.now() - parseInt(cacheTimestamp) : 0;

      // Use cache if it's less than 1 hour old
      if (cachedEpisode && cacheAge < 3600000) {
        setEpisode(JSON.parse(cachedEpisode));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/.netlify/functions/fetch-rss");
        const xmlData = await response.text();

        const parser = new XMLParser({
          ignoreAttributes: false,
          attributeNamePrefix: "@_"
        });

        const result = parser.parse(xmlData);
        const episodes = result.rss.channel.item;
        const episodeData = episodes.find(
          (episode: any) => episode.guid["#text"] === decodeURIComponent(id!)
        );

        if (!episodeData) {
          throw new Error("Episode not found");
        }

        const processedEpisode = {
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

        setEpisode(processedEpisode);

        // Cache the episode data
        localStorage.setItem(`episode-${id}`, JSON.stringify(processedEpisode));
        localStorage.setItem(`episode-${id}-timestamp`, Date.now().toString());

      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch episode");
      } finally {
        setLoading(false);
      }
    };

    fetchEpisode();
  }, [id]);

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
			<div className="mb-4">
			<audio
				controls
				className="w-full"
				preload="none"
			>
				<source
				src={episode.enclosures[0]["@_url"]}
				type={episode.enclosures[0]["@_type"]}
				/>
				Your browser does not support the audio element.
			</audio>
			</div>
		)}

		<p className="text-sm"><span className="font-semibold">Published:{" "}</span>{formatDate(episode.created)}</p>
		<p className="text-sm"><span className="font-semibold">Duration:{" "}</span>{formatDuration(episode.itunes_duration)}</p>

		<ShareButtons
			title={episode.title}
			url={window.location.href}
		/>

		<hr className={`${isDarkMode ? "border-[#F03D86]" : "border-[#2F241D]"} mx-auto mt-4 mb-4`} />

		<div
			className={`${theme.text} prose max-w-none ${
			isDarkMode
			? "prose-a:text-[#F03D86] prose-a:hover:text-[#F03D86] prose-strong:text-[#2F241D] prose-ol:text-[#2F241D] prose-li:marker:text-[#2F241D]"
			: "prose-a:text-[#2F241D] prose-a:hover:text-[#2F241D] prose-strong:text-[#2F241D] prose-ol:text-[#2F241D] prose-li:marker:text-[#2F241D]"
		} prose-a:transition-colors prose-a:duration-200 prose-a:underline prose-p:text-[#2F241D]`}
		dangerouslySetInnerHTML={{ __html: episode.content }}
		/>
    </div>
  );
}
