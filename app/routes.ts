import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { Layout } from "./components/Layout";
export default [
  {
    element: <Layout />,
    children: [
      index("routes/home"),
      route("guests", "guests/Guests"),
      route("sponsors", "sponsors/Sponsors"),
      route("contact", "contact/Contact"),
    ]
  }
] satisfies RouteConfig;
