import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
	layout("./components/Layout.tsx", [
		index("routes/home.tsx"),
		route("episodes", "routes/episodes.tsx"),
		route("episodes/:id", "routes/episodes.$id.tsx"),
		route("guests", "routes/guests.tsx"),
		route("sponsors", "routes/sponsors.tsx"),
		route("about", "routes/about.tsx"),
		route("contact", "routes/contact.tsx"),
		route("chat", "routes/chat.tsx"),
		route("data-structures", "routes/datastructures.tsx"),
		route("do-it-with-ai", "routes/doitwithai.tsx"),
		// Tutorial detail pages
		route("do-it-with-ai/html", "routes/tutorials/html.tsx"),
		route("do-it-with-ai/markdown", "routes/tutorials/markdown.tsx"),
		route("do-it-with-ai/json", "routes/tutorials/json.tsx"),
		route("do-it-with-ai/handlebars", "routes/tutorials/handlebars.tsx"),
	]),
] satisfies RouteConfig;
