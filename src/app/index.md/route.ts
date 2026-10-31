import { pageMarkdown } from "@/lib/markdown";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// The HTML page stays the indexed one; this copy points search engines back to it.
export function GET() {
  return new Response(pageMarkdown(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8", Link: `<${SITE_URL}/>; rel="canonical"` },
  });
}
