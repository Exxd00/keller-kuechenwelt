import type { MetadataRoute } from "next";

const BASE_URL = "https://keller-kuechenwelt.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Main pages
  const mainPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/kuechen", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/marken", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/projekte", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/showroom", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/ueber-uns", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/kontakt", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/termin-buchen", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // Kitchen type pages
  const kitchenTypes = [
    "moderne-kuechen",
    "landhauskuechen",
    "l-kuechen",
    "u-kuechen",
    "insel-kuechen",
  ];

  const kitchenPages = kitchenTypes.map((type) => ({
    url: `/kuechen/${type}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Service pages
  const servicePages = [
    { url: "/kuechen/kuechenplanung", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/kuechen/kuechenverkauf", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/kuechen/montage", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/kuechen/aufmass", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/kuechen/3d-planung", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // Legal pages (low priority)
  const legalPages = [
    { url: "/impressum", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/datenschutz", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const allPages = [...mainPages, ...kitchenPages, ...servicePages, ...legalPages];

  return allPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
