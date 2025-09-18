import { BecomeASponsor } from "~/pages/become-a-sponsor/become-a-sponsor";
import type { Route } from "./+types/sponsors";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sponsors | Partner with AllWebSD Podcast" },
	{ name: "description", content: "Support the AllWebSD Podcast and reach web creators, developers, and digital innovators through sponsorship opportunities." },
	{ name: "twitter:card", content: "Support the AllWebSD Podcast and reach web creators, developers, and digital innovators through sponsorship opportunities." },
	{ property: "og:title", content: "AllWebSD Sponsors" },
	{ property: "og:type", content: "website" },
	{ property: "og:url", content: "https://www.allwebsd.com" },
	{ property: "og:description", content: "Partner with AllWebSD and connect your brand with a community of web creators and innovators." },
  ];
}

export default function Sponsors() {
	return (
		<BecomeASponsor />
	);
}
