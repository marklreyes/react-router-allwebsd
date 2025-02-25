import { useState, useEffect } from "react";
import { XMLParser } from "fast-xml-parser";
import type { EpisodeData } from "~/types/episode";
import { createSlug } from "~/utils/formatters";

export const useRSSFeed = (id: string | undefined) => {
  const [episode, setEpisode] = useState<EpisodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      if (!id) return;
      setLoading(true);

      const cachedEpisode = localStorage.getItem(`episode-${id}`);
      const cacheTimestamp = localStorage.getItem(`episode-${id}-timestamp`);
      const cacheAge = cacheTimestamp ? Date.now() - parseInt(cacheTimestamp) : 0;

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
          (episode: any) => createSlug(episode.title) === id
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

  return { episode, loading, error };
};
