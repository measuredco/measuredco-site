import { MetadataRoute } from "next";

import content from "../content.json";

const { themeColor, title } = content;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: title,
    short_name: "Msrd",
    icons: [
      {
        src: "/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/maskable_icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: themeColor,
    background_color: "#ffffff",
    display: "standalone",
  };
}
