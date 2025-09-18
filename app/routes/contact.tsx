import { ContactMe } from "~/pages/contact-me/contact-me";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Contact | Get in Touch with AllWebSD" },
		{ name: "description", content: "Reach out to AllWebSD for questions, feedback, guest inquiries, or sponsorship opportunities." },
		{ name: "twitter:card", content: "Reach out to AllWebSD for questions, feedback, guest inquiries, or sponsorship opportunities." },
		{ property: "og:title", content: "Contact AllWebSD" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://www.allwebsd.com/contact" },
		{ property: "og:description", content: "Have a question or idea? Connect with AllWebSD about episodes, sponsorships, or collaborations." }
	];
}

export default function Contact() {
	return (
		<ContactMe />
	);
}
