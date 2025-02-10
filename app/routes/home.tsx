import type { Route } from "./+types/home";
import { Welcome } from "../welcome/Welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Web Developer podcasting out of San Diego, California | AllWebSD.com" },
    { name: "description", content: "Just a web developer podcasting out of America's Finest City!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
