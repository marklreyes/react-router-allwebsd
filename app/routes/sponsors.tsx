import { BecomeASponsor } from "~/pages/become-a-sponsor/become-a-sponsor";
import type { Route } from "./+types/sponsors";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sponsors | Web Developer storytelling, teaching and community building out of America's Finest City | AllWebSD.com" },
	{ name: "description", content: "Just a web developer podcasting out of America's Finest City!" },
	{ name: "twitter:card", content: "Just a Web Developer storytelling, teaching and community building out of America's Finest City!" },
	{ property: "og:title", content: "Just a Web Developer storytelling, teaching and community building out of America's Finest City!" },
	{ property: "og:type", content: "website" },
	{ property: "og:url", content: "https://www.allwebsd.com" },
	{ property: "og:description", content: "Just a Web Developer storytelling, teaching and community building out of America's Finest City!" },
  ];
}

export default function Sponsors() {
	return (
		<BecomeASponsor />
	);
}
