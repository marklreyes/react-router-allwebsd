import { BecomeAGuest } from "~/pages/become-a-guest/become-a-guest";
import type { Route } from "./+types/guests";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Guests | Meet the Voices of AllWebSD Podcast" },
		{ name: "description", content: "Explore the guests of AllWebSD: web developers, designers, founders, and makers shaping the future of the web." },
		{ name: "twitter:card", content: "Explore the guests of AllWebSD: web developers, designers, founders, and makers shaping the future of the web." },
		{ property: "og:title", content: "AllWebSD Guests" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://www.allwebsd.com/guests" },
		{ property: "og:description", content: "Meet the brilliant voices behind AllWebSD—no-code to full-code creators sharing their journeys." }
	];
}

export default function Guests() {
	return (
		<BecomeAGuest />
	);
}
