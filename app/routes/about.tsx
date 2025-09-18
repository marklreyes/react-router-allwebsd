import { AboutMe } from "~/pages/about-me/about-me";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About | AllWebSD Podcast & Community" },
        { name: "description", content: "Learn the story behind AllWebSD, a podcast rooted in San Diego and open to all creators—from no-code to full-code." },
		{ name: "twitter:card", content: "Learn the story behind AllWebSD, a podcast rooted in San Diego and open to all creators—from no-code to full-code." },
        { property: "og:title", content: "About AllWebSD" },
		{ property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.allwebsd.com/about" },
        { property: "og:description", content: "Discover the story and mission of AllWebSD—sharing real conversations and community for web creators everywhere." },
	];
}

export default function About() {
	return (
		<AboutMe />
	);
}
