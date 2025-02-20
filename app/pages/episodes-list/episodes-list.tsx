
import { useEffect, useState } from "react";
import { useTheme } from "~/context/ThemeContext";
import parse from "rss-to-json";
import { Episode } from "~/components/Episode";

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
	const RSS_URL = import.meta.env.VITE_CASTBOX_RSS_URL;
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

			const cachedData = localStorage.getItem('rssCache');
			const cacheTimestamp = localStorage.getItem('rssCacheTimestamp');
			const cacheAge = cacheTimestamp ? Date.now() - parseInt(cacheTimestamp) : 0;

			// Use cache if it's less than 1 hour old
			if (cachedData && cacheAge < 3600000) {
				setRssData(JSON.parse(cachedData));
				return;
			}

			try {
				const rss = await parse(RSS_URL);
				setRssData(rss);
				localStorage.setItem('rssCache', JSON.stringify(rss));
				localStorage.setItem('rssCacheTimestamp', Date.now().toString());
			} catch (error) {
				console.error("Error fetching RSS:", error);
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
				<p>Loading...</p>
			)}
		</div>
	);
}
