import { AboutMe } from "~/pages/about-me/about-me";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Web Developer podcasting out of San Diego, California | AllWebSD.com" },
	{ name: "description", content: "Just a web developer podcasting out of America's Finest City!" },
	{ name: "twitter:card", content: "Just a web developer storytelling out of America's Finest City!" },
	{ property: "og:title", content: "Just a web developer storytelling out of America's Finest City!" },
	{ property: "og:type", content: "website" },
	{ property: "og:url", content: "//www.allwebsd.com" },
	{ property: "og:description", content: "Just a web developer storytelling out of America's Finest City!" },
  ];
}

export default function Contact() {
	return (
		<AboutMe />
	);
}
