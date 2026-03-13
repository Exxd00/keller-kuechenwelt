import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you", "/termin-bestaetigt", "/api/"],
    },
    sitemap: "https://keller-kuechenwelt.de/sitemap.xml",
  };
}
