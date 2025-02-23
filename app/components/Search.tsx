import { FaMagnifyingGlass } from "react-icons/fa6";
import { useTheme } from "~/context/ThemeContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { XMLParser } from "fast-xml-parser";

interface SearchResult {
  title: string;
  description: string;
  link: string;
  pubDate: string;
}

export default function Search() {
  const { isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchEpisodes = async () => {
      if (searchTerm.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch("/.netlify/functions/fetch-rss");
        const xmlData = await response.text();

        const parser = new XMLParser({
          ignoreAttributes: false,
          attributeNamePrefix: "@_"
        });

        const result = parser.parse(xmlData);
        const episodes = result.rss.channel.item;

        const filtered = episodes.filter((episode: any) => {
          const title = episode.title.toLowerCase();
          const description = episode.description.toLowerCase();
          const term = searchTerm.toLowerCase();
          return title.includes(term) || description.includes(term);
        }).slice(0, 5); // Limit to 5 results

        setResults(filtered);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchEpisodes, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

// Add slug creation helper (same as in Episode.tsx)
const createSlug = (title: string): string => {
	return title
	  .toLowerCase()
	  .replace(/<[^>]*>/g, "") // Remove HTML tags
	  .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
	  .replace(/\s+/g, "-") // Replace spaces with hyphens
	  .replace(/-+/g, "-") // Remove consecutive hyphens
	  .trim(); // Remove leading/trailing spaces
  };

  return (
    <div className="relative">
      <div className={`flex items-center transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-48' : 'w-8'
      }`}>
        <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}>
          <FaMagnifyingGlass className={`${
            isDarkMode ? 'text-[#F03D86]' : 'text-[#2F241D]'
          } w-4 h-4`} />
        </div>

        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={isExpanded ? "Search Episode" : ""}
          className={`transition-all duration-300 ease-in-out ${
            isExpanded
              ? 'w-full pl-10 pr-3 py-2' // Added py-2 for vertical padding
              : 'w-8 h-8 px-0 bg-opacity-0'
          } border rounded-full ${
            isDarkMode
              ? 'bg-[#71BEA9] placeholder-[#2F241D] text-[#2F241D] focus:border-[#F03D86]'
              : 'bg-[#FFC425] placeholder-[#2F241D] text-[#2F241D] focus:border-[#2F241D]'
          } focus:outline-none focus:ring-1 ${
            isDarkMode ? 'focus:ring-[#F03D86]' : 'focus:ring-[#2F241D]'
          }`}
          onFocus={() => setIsExpanded(true)}
          onBlur={(e) => {
            if (e.target.value === '') {
              setIsExpanded(false);
              setSearchTerm('');
            }
          }}
        />

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`absolute right-0 w-8 h-8 rounded-full ${
            isExpanded ? 'opacity-0' : 'opacity-100'
          } ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'} flex items-center justify-center`}
        >
          <FaMagnifyingGlass className={`${
            isDarkMode ? 'text-[#F03D86]' : 'text-[#2F241D]'
          } w-4 h-4`} />
        </button>

        {/* Search Results Dropdown */}
        {isExpanded && searchTerm.length >= 2 && (
          <div className={`absolute top-full left-0 w-80 -ml-16 mt-1 rounded-lg shadow-lg overflow-hidden ${
            isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'
          } z-50`}>
            {isLoading ? (
              <div className="p-3 text-center text-[#2F241D]">Searching...</div>
            ) : results.length > 0 ? (
              <div className="max-h-60 overflow-y-auto">
                {results.map((episode, index) => (
                  <Link
                    key={index}
                    to={`/episodes/${createSlug(episode.title)}`}
                    className={`block p-3 ${
                      results.length === 1
                        ? 'rounded-lg' // Single item
                        : index === 0
                        ? 'rounded-t-lg' // First item
                        : index === results.length - 1
                        ? 'rounded-b-lg' // Last item
                        : '' // Middle items
                    } hover:${isDarkMode ? 'bg-[#F03D86]' : 'bg-[#2F241D]'} hover:text-white`}
                  >
                    <div className="font-medium truncate">{episode.title}</div>
                  </Link>
                ))}
              </div>
            ) : searchTerm.length >= 2 && (
              <div className="p-3 text-center text-[#2F241D]">No episodes found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
