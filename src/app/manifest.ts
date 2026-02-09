import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quadco Consults - Engineering & IT Solutions",
    short_name: "Quadco Consults",
    description:
      "Leading Nigerian IT consulting, engineering, and oil & gas solutions company.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a14",
    theme_color: "#10b981",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
