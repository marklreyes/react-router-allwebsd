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
		<div className="flex items-center justify-center pt-4 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="max-w-[1024px] w-full px-4">
					<p>The future home of a contact page.</p>
				</div>
			</div>
		</div>
	);
}
