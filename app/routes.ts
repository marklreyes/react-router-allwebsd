import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("guests", "guests/guests.tsx"),
	route("sponsors", "sponsors/sponsors.tsx"),
	route("contact", "contact/contact.tsx"),

] satisfies RouteConfig;
