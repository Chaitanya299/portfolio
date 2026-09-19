import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Single-page site: the one canonical URL. /api/* is Disallowed in robots.txt,
// so it must not appear here (a sitemap URL blocked by robots throws a Search
// Console error). The JSON resume at /api/me is a machine endpoint, not a page.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];
}
