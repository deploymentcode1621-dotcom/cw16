import type { MetadataRoute } from "next";

const siteUrl = "https://ssdpclatur.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/admission",
    "/rules",
    "/donation",
    "/contact",
    "/gallery",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
