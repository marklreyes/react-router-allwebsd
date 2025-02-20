import { useEffect, useState } from "react";
import { useTheme } from "~/context/ThemeContext";
import { Episode } from "~/components/Episode";
import { MdFrontLoader } from "react-icons/md";
import { XMLParser } from "fast-xml-parser";

interface RSSFeed {
	title: any;
	description: any;
	link: any;
	image: any;
	category: any;
	items: {
		title: string;
		created: number;
		content: string;
		enclosures: {
			url: string;
			type: string;
		}[];
		itunes_duration: string;
	}[];
}

export function EpisodesList() {
	const RSS_URL = "/.netlify/functions/fetch-rss";
	const [isLoading, setIsLoading] = useState(true);
	const [rssData, setRssData] = useState<RSSFeed | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;
	const { theme } = useTheme();

	const getCurrentItems = () => {
		if (!rssData) return [];
		const startIndex = (currentPage - 1) * itemsPerPage;
		return rssData.items.slice(startIndex, startIndex + itemsPerPage);
	};

	useEffect(() => {
		const fetchRSS = async () => {
			setIsLoading(true);

			const cachedData = localStorage.getItem("rssCache");
			const cacheTimestamp = localStorage.getItem("rssCacheTimestamp");
			const cacheAge = cacheTimestamp ? Date.now() - parseInt(cacheTimestamp) : 0;

			// Use cache if it"s less than 1 hour old
			if (cachedData && cacheAge < 3600000) {
				setRssData(JSON.parse(cachedData));
				return;
			}

			try {
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
	}, []);

	return (
		<div className="w-full">
			<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
				View Episodes
			</h1>
			{rssData ? (
				<>
				{getCurrentItems().map((item, index) => (
					<Episode
						key={index}
						title={item.title}
						created={item.created}
						content={item.content}
						enclosure={item.enclosures?.[0]}
						itunesDuration={item.itunes_duration}
						currentPage={currentPage}
						index={index}
					/>
				))}
				<div className={`${theme.primary} flex justify-center gap-2 rounded-lg p-1`}>
					<button
						onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
						className="px-4 py-2 rounded disabled:opacity-50"
					>
						Previous
					</button>
					<span className="px-4 py-2">
						Page {currentPage} of {Math.ceil(rssData.items.length / itemsPerPage)}
					</span>
					<button
						onClick={() => setCurrentPage(prev => prev + 1)}
						disabled={currentPage >= Math.ceil(rssData.items.length / itemsPerPage)}
						className="px-4 py-2 rounded disabled:opacity-50"
					>
						Next
					</button>
				</div>
				</>
			) : (
				<div className={`${theme.primary} rounded-lg p-4`}>
					<h2 className={`${theme.text} flex items-center justify-center text-center font-semibold mb-4 text-xl`}><MdFrontLoader />&nbsp;Loading Episodes...</h2>
					<iframe title="I'm Ron Burgandy?" className="mx-auto mb-4" width="100%" height="315" src="//www.youtube.com/embed/X3zfP14pLxc?si=6gR_iQ7eKhy5i3Yt&autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
					<p className={`${theme.text} flex items-center justify-center text-center`}>Until then...<em>you stay classy, San Diego!</em></p>
				</div>
			)}
		</div>
	);
}
