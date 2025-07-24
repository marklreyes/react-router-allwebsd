import { ContactMe } from "~/pages/contact-me/contact-me";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Contact Mark | Web Developer storytelling and community building out of America's Finest City | AllWebSD.com" },
		{ name: "description", content: "Contact Mark to schedule time on air, sponsor the show, consultations or a coffee!" },
		{ name: "twitter:card", content: "Contact Mark to schedule time on air, sponsor the show, consultations or a coffee!" },
		{ property: "og:title", content: "Contact Mark | Web Developer storytelling and community building out of America's Finest City | AllWebSD.com" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://www.allwebsd.com/contact" },
		{ property: "og:description", content: "Contact Mark to schedule time on air, sponsor the show, consultations or a coffee!" }
	];
}

export default function Contact() {
	return (
		<ContactMe />
	);
}
