import type { MetadataRoute } from "next";
import { SITE_URL, CONTENT_UPDATED } from "@/lib/site";

// Single-page site: the one canonical URL. /api/* is Disallowed in robots.txt,
// so it must not appear here (a sitemap URL blocked by robots throws a Search
// Console error). The JSON resume at /api/me is a machine endpoint, not a page.
// lastModified is the real content date, not the build time (Google ignores a lastmod that
// always moves); changefreq/priority are ignored by Google, so they are left out.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, lastModified: CONTENT_UPDATED }];
}
