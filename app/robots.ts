import { MetadataRoute } from "next";

import content from "../content.json";

const { siteUrl } = content;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/lighthouse/",
      },
      {
        userAgent: "*",
        disallow: "/proposals/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
