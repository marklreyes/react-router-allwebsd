import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Web Developer podcasting out of San Diego, California | AllWebSD.com" },
    { name: "description", content: "Just a web developer podcasting out of America's Finest City!" },
		{ name: "twitter:card", content: "Just a web developer storytelling out of America's Finest City!" },
		{ property: "og:title", content: "Just a web developer storytelling out of America's Finest City!" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "//www.allwebsd.com" },
		{ property: "og:description", content: "Just a web developer storytelling out of America's Finest City!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
