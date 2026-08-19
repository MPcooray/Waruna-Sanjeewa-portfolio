import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = ["", "/about", "/journalism", "/training", "/music", "/archive", "/contact", "/publications"];

  return pages.map((path, index) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
