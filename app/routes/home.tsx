import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome/welcome";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Home | Web Developer storytelling out of America's Finest City | AllWebSD.com" },
		{ name: "description", content: "Just a web developer storytelling out of America's Finest City!" },
		{ name: "twitter:card", content: "Just a web developer storytelling out of America's Finest City!" },
		{ property: "og:title", content: "Home | Web Developer storytelling out of America's Finest City | AllWebSD.com" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "//www.allwebsd.com" },
		{ property: "og:description", content: "Just a web developer storytelling out of America's Finest City!" }
	];
}

export default function Home() {
  return <Welcome />;
}
