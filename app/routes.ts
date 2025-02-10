import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("guests", "guests/Guests.tsx"),
	route("sponsors", "sponsors/Sponsors.tsx"),
	route("contact", "contact/Contact.tsx"),

] satisfies RouteConfig;
