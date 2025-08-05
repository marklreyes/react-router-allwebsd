import type { Route } from "./+types/contact";
import { EpisodesList } from "~/pages/episodes-list/episodes-list";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Episodes | Web Developer storytelling, teaching and community building out of America's Finest City | AllWebSD.com" },
		{ name: "description", content: "Press play and listen to any and all episodes of The AllWebSD.com Podcast!" },
		{ name: "twitter:card", content: "Press play and listen to any and all episodes of The AllWebSD.com Podcast!" },
		{ property: "og:title", content: "Episodes | Web Developer storytelling, teaching and community building out of America's Finest City | AllWebSD.com" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://www.allwebsd.com/episodes" },
		{ property: "og:description", content: "Press play and listen to any and all episodes of The AllWebSD.com Podcast!" }
	];
}

export default function Episodes() {
	return (
		<EpisodesList />
	);
}
