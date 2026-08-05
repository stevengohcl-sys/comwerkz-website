import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Comwerkz Technology P.L.",
    short_name: "Comwerkz",
    description: "IT services, smart infrastructure and automation solutions in Singapore.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00152e"
  };
}
