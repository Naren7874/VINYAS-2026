import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VINYAS 2026 | Premier Design & Architecture",
    short_name: "VINYAS 2026",
    description:
      "VINYAS 2026 is a premium architectural design studio and portfolio, showcasing cutting-edge spatial concepts, sustainable structural innovation, and future design landscapes.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
