import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
	layout("./components/Layout.tsx", [
		index("routes/home.tsx"),
		route("guests", "guests/guests.tsx"),
		route("sponsors", "sponsors/sponsors.tsx"),
		route("contact", "contact/contact.tsx"),
	]),
] satisfies RouteConfig;
