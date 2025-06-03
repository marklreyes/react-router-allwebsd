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
	]),
] satisfies RouteConfig;
