import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Allow every crawler (search engines and AI agents) over the whole site;
    // only the API routes are pointless to index.
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
