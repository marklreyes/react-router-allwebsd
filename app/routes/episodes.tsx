import type { Route } from "./+types/contact";
import { EpisodesList } from "~/pages/episodes-list/episodes-list";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Episodes | AllWebSD Podcast for Web Creators" },
		{ name: "description", content: "Listen to AllWebSD podcast episodes featuring stories, insights, and lessons from no-code to full-code creators worldwide." },
		{ name: "twitter:card", content: "Listen to AllWebSD podcast episodes featuring stories, insights, and lessons from no-code to full-code creators worldwide." },
		{ property: "og:title", content: "AllWebSD Podcast Episodes" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://www.allwebsd.com/episodes" },
		{ property: "og:description", content: "Catch every episode of AllWebSD—where creators share stories, strategies, and community." }
	];
}

export default function Episodes() {
	return (
		<EpisodesList />
	);
}
