import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sky Glass IPTV",
    short_name: "Sky Glass IPTV",
    description:
      "Choose Sky Glass IPTV for live TV, movies and sports in the UK. Compare flexible plans, request a 24-hour trial and get setup support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#E91E8C",
    id: "/",
    scope: "/",
    lang: "en-GB",
    icons: [
      {
        src: "/icons/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
