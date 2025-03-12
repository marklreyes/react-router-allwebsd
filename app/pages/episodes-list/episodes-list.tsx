import { useEffect, useState } from "react";
import { useTheme } from "~/context/ThemeContext";
import { Episode } from "~/components/Episode";
import { MdFrontLoader } from "react-icons/md";
import { XMLParser } from "fast-xml-parser";
import { Pagination } from "~/components/Pagination";
import { useSearchParams } from "react-router-dom";
import type { RSSFeed } from "~/types/episode";


export function EpisodesList() {
	const [searchParams, setSearchParams] = useSearchParams();
	const RSS_URL = "/.netlify/functions/fetch-rss";
	const [isLoading, setIsLoading] = useState(true);
	const [rssData, setRssData] = useState<RSSFeed | null>(null);
	const itemsPerPage = 5;
	const { theme } = useTheme();

	// Get current page from URL or default to 1
	const currentPage = Number(searchParams.get("page")) || 1;

	// Update the setCurrentPage function to use searchParams
	const handlePageChange = (page: number) => {
		setSearchParams({ page: page.toString() });
	};

	const getCurrentItems = () => {
		if (!rssData) return [];
		const startIndex = (currentPage - 1) * itemsPerPage;
		return rssData.items.slice(startIndex, startIndex + itemsPerPage);
	};

	useEffect(() => {
		const fetchRSS = async () => {
			try {
				// Check cache first
				const cachedData = localStorage.getItem("rssCache");
				const cacheTimestamp = localStorage.getItem("rssCacheTimestamp");
				const cacheAge = cacheTimestamp ? Date.now() - parseInt(cacheTimestamp) : 0;

				// Use cache if it's less than 1 hour old
				if (cachedData && cacheAge < 3600000) {
					setRssData(JSON.parse(cachedData));
					setIsLoading(false); // Add this line
					return;
				}

				setIsLoading(true); // Only set loading true if we need to fetch

				const response = await fetch(RSS_URL);
				const xmlData = await response.text();

				// Initialize XML parser
				const parser = new XMLParser({
					ignoreAttributes: false,
					attributeNamePrefix: "@_"
				});

				// Parse XML to JSON
				const result = parser.parse(xmlData);

				// Transform parsed data to match RSSFeed interface
				const rss = {
					title: result.rss.channel.title,
					description: result.rss.channel.description,
					link: result.rss.channel.link,
					image: result.rss.channel.image,
					category: result.rss.channel.category,
					items: result.rss.channel.item.map((item: any) => ({
						title: item.title,
						created: new Date(item.pubDate).getTime(),
						content: item["content:encoded"] || item.description,
						enclosures: item.enclosure ? [item.enclosure] : [],
						guids: item.guid ? [{
							'@_isPermaLink': item.guid['@_isPermaLink'],
							'#text': item.guid['#text']
						}] : [],
						itunes_duration: item["itunes:duration"]
					}))
				};

				setRssData(rss);
				localStorage.setItem("rssCache", JSON.stringify(rss));
				localStorage.setItem("rssCacheTimestamp", Date.now().toString());
			} catch (error) {
				console.error("Error fetching/parsing RSS:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRSS();
	}, []); // Keep the empty dependency array

	return (
		<main className="w-full" role="main">
			<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
				Episodes List
			</h1>
			{isLoading ? (
				<div className={`${theme.primary} rounded-lg p-4`} role="status" aria-live="polite">
					<h2 className={`${theme.text} flex items-center justify-center text-center font-semibold mb-4 text-xl`}>
						<MdFrontLoader aria-hidden="true" className="shake" />&nbsp;Loading Episodes...
					</h2>
					<p className={`${theme.text} flex items-center justify-center text-center`}>
						Until then...<em>you stay classy, San Diego!</em>
					</p>
				</div>
			) : rssData ? (
				<>
					<section aria-label="Episode List">
						{getCurrentItems().map((item, index) => (
							<Episode
								key={item.guids?.[0]?.["#text"] || index}
								title={item.title}
								created={item.created}
								content={item.content}
								enclosure={item.enclosures?.[0]}
								guid={item.guids?.[0]}
								itunesDuration={item.itunes_duration}
								currentPage={currentPage}
								index={index}
							/>
						))}
					</section>
					<nav aria-label="Pagination">
						<Pagination
							currentPage={currentPage}
							totalItems={rssData.items.length}
							itemsPerPage={itemsPerPage}
							onPageChange={handlePageChange}
						/>
					</nav>
				</>
			) : (
				<div className={`${theme.primary} rounded-lg p-4`} role="alert">
					<p className={`${theme.text} text-center`}>Failed to load episodes. Please try again later.</p>
				</div>
			)}
		</main>
	);
}
