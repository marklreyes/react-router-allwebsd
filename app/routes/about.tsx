import { AboutMe } from "~/pages/about-me/about-me";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About | Web Developer storytelling out of America's Finest City | AllWebSD.com" },
        { name: "description", content: "Learn about Mark Reyes, a web developer sharing stories and insights from San Diego, California. Discover his journey in tech and passion for storytelling." },
		{ name: "twitter:card", content: "Contact Mark to schedule time on air, sponsor the show, consultations or a coffee!" },
        { property: "og:title", content: "About Mark Reyes | Web Developer storytelling out of America's Finest City | AllWebSD.com" },
		{ property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.allwebsd.com/about" },
        { property: "og:description", content: "Learn about Mark Reyes, a web developer sharing stories and insights from San Diego, California. Discover his journey in tech and passion for storytelling." },
	];
}

export default function About() {
	return (
		<AboutMe />
	);
}
