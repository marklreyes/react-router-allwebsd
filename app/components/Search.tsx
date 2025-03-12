import { FaMagnifyingGlass } from "react-icons/fa6";
import { useTheme } from "~/context/ThemeContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { XMLParser } from "fast-xml-parser";
import { createSlug } from "~/utils/formatters";
import type { SearchResult } from "~/types/episode";

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
          const searchTokens = searchTerm.toLowerCase().split(/\s+/);
          const titleTokens = episode.title.toLowerCase().split(/\s+/);
          const descriptionTokens = episode.description.toLowerCase().split(/\s+/);

          return searchTokens.every(token =>
            titleTokens.some(word =>
              levenshteinDistance(word, token) <= 2
            ) ||
            descriptionTokens.some(word =>
              levenshteinDistance(word, token) <= 2
            )
          );
        });

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

  const levenshteinDistance = (a: string, b: string): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = Array(b.length + 1).fill(null).map(() =>
      Array(a.length + 1).fill(null)
    );

    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + cost
        );
      }
    }

    return matrix[b.length][a.length];
  };

  return (
		<div className="relative">
			<div className={`flex items-center transition-all duration-300 ease-in-out ${
			isExpanded ? 'w-48' : 'w-8'
			}`}>
			<label htmlFor="search" className="sr-only">Search episodes</label>
			<div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${
				isExpanded ? 'opacity-100' : 'opacity-0'
			}`}>
				<FaMagnifyingGlass
				className={`${isDarkMode ? 'text-[#F03D86]' : 'text-[#2F241D]'} w-4 h-4`}
				aria-hidden="true"
				/>
			</div>

			<input
				type="search"
				id="search"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder={isExpanded ? "Search Episode" : ""}
				aria-expanded={isExpanded}
				aria-controls="search-results"
				aria-label="Search episodes"
				className={`transition-all duration-300 ease-in-out ${
				isExpanded
					? 'w-full pl-10 pr-3 py-2'
					: 'w-8 h-8 px-0 bg-opacity-0'
				} border rounded-full ${
				isDarkMode
					? 'bg-[#71BEA9] placeholder-[#2F241D] text-[#2F241D] focus:border-[#F03D86]'
					: 'bg-[#FFC425] placeholder-[#2F241D] text-[#2F241D] focus:border-[#2F241D]'
				} focus:outline-hidden focus:ring-1 ${
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
				aria-label="Toggle search"
				className={`absolute right-0 w-8 h-8 rounded-full ${
				isExpanded ? 'opacity-0' : 'opacity-100'
				} ${isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'} flex items-center justify-center`}
			>
				<FaMagnifyingGlass
				className={`${isDarkMode ? 'text-[#F03D86]' : 'text-[#2F241D]'} w-4 h-4`}
				aria-hidden="true"
				/>
			</button>

			{/* Search Results Dropdown */}
			{isExpanded && searchTerm.length >= 2 && (
				<div
				id="search-results"
				role="region"
				aria-label="Search results"
				className={`absolute top-full left-0 w-96 -ml-24 mt-1 rounded-lg shadow-lg overflow-hidden ${
					isDarkMode ? 'bg-[#71BEA9]' : 'bg-[#FFC425]'
				} z-50`}
				>
				{isLoading ? (
					<div className="p-3 text-center text-[#2F241D]" role="status">Searching...</div>
				) : results.length > 0 ? (
					<div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-[#2F241D] scrollbar-track-transparent">
					{results.map((episode, index) => (
						<Link
						key={index}
						to={`/episodes/${createSlug(episode.title)}`}
						className={`block p-3 border-b last:border-b-0 ${
							results.length === 1
							? 'rounded-lg'
							: index === 0
							? 'rounded-t-lg'
							: index === results.length - 1
							? 'rounded-b-lg'
							: ''
						} transition-colors duration-200 hover:${isDarkMode ? 'bg-[#F03D86]' : 'bg-[#2F241D]'} hover:text-white`}
						>
						<div className="font-medium truncate">{episode.title}</div>
						</Link>
					))}
					</div>
				) : searchTerm.length >= 2 && (
					<div className="p-3 text-center text-[#2F241D]" role="status">No episodes found</div>
				)}
				</div>
			)}
			</div>
		</div>
  );
}
