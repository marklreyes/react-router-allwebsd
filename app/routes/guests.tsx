import { BecomeAGuest } from "~/pages/become-a-guest/become-a-guest";
import type { Route } from "./+types/guests";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Guests | Web Developer podcasting out of San Diego, California | AllWebSD.com" },
	{ name: "description", content: "Just a web developer podcasting out of America's Finest City!" },
	{ name: "twitter:card", content: "Just a web developer storytelling out of America's Finest City!" },
	{ property: "og:title", content: "Just a web developer storytelling out of America's Finest City!" },
	{ property: "og:type", content: "website" },
	{ property: "og:url", content: "//www.allwebsd.com" },
	{ property: "og:description", content: "Just a web developer storytelling out of America's Finest City!" },
  ];
}

export default function Guests() {
	return (
		<BecomeAGuest />
	);
}
