import { BecomeAGuest } from "~/pages/become-a-guest/become-a-guest";
import type { Route } from "./+types/guests";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Guests | Web Developer storytelling, teaching and community building out of America's Finest City | AllWebSD.com" },
		{ name: "description", content: "Become a guest, receive a shirt. Yep, it's just that easy!" },
		{ name: "twitter:card", content: "Become a guest, receive a shirt. Yep, it's just that easy!" },
		{ property: "og:title", content: "Episodes | Web Developer storytelling, teaching and community building out of America's Finest City | AllWebSD.com" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://www.allwebsd.com/guests" },
		{ property: "og:description", content: "Become a guest, receive a shirt. Yep, it's just that easy!" }
	];
}

export default function Guests() {
	return (
		<BecomeAGuest />
	);
}
