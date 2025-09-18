import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome/welcome";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "AllWebSD Podcast | Stories for No-Code to Full-Code Creators" },
		{ name: "description", content: "Conversations with no-code, low-code, and full-code creators. Rooted in San Diego, open to the world." },
		{ name: "twitter:card", content: "Conversations with no-code, low-code, and full-code creators. Rooted in San Diego, open to the world." },
		{ property: "og:title", content: "AllWebSD | Web Creator Stories & Community" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://www.allwebsd.com" },
		{ property: "og:description", content: "A podcast sharing stories, insights, and community for web creators—no-code to full-code, from San Diego and beyond." }
	];
}

export default function Home() {
  return <Welcome />;
}
