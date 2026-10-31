# Site audit findings: chaitanyaparasana.com

Status: completed (read-only). Evidence captured 2026-10-31 from the live site
(`https://www.chaitanyaparasana.com`, deploy `4b122cd`). Owner of fixes: Chaitanya Parasana.
Authorized boundary: audit only. No site code, release or provider change was made.

## Scope

One canonical URL (`/`), plus `robots.txt`, `sitemap.xml`, `/opengraph-image`, icons,
`/api/me`, `/api/health`. The site is a single native-scroll page; sections are hash anchors,
so there is no internal URL graph beyond `/`.

## What is already right (facts)

| Check | Observed |
| --- | --- |
| Status, host | `/` 200, `text/html; charset=utf-8`; apex and `http://` both 308 to `https://www.` |
| Indexing | `robots` and `googlebot` meta `index, follow` (googlebot adds `max-image-preview:large, max-snippet:-1`); no `X-Robots-Tag` |
| Canonical | `https://www.chaitanyaparasana.com` (self) |
| Title | "Chaitanya Parasana \| Full-Stack & AI Engineer · Hyderabad" |
| Description | "Full-stack and AI engineer building AI products that keep working after the demo: voice agents, assistants, and the machinery that runs them." |
| Headings | one `h1` "Chaitanya Parasana"; six `h2` section headings |
| Social | full Open Graph and Twitter card set; dynamic OG image 200 `image/png` |
| Structured data | one `Person` block: name, alternateName, url, jobTitle, description, address (Hyderabad, IN), knowsAbout, sameAs (GitHub, LinkedIn, Reddit) |
| Content in HTML | about 1,720 words server-rendered, no JS needed to read it |
| robots.txt | `Allow: /`, `Disallow: /api/`, sitemap line |
| sitemap.xml | one URL, valid |
| Verification | Google and Bing site-verification meta present |
| Images | 6 content images, all with descriptive `alt`; 1 empty-alt hidden preview container (decorative, correct) |

## Findings

Severity: important = affects whether the site can be found for what it offers; minor = hygiene.

### F1. Important: the name query doesn't surface the site in an independent web index
- **Fact:** a 2026-10-31 search for "Chaitanya Parasana" (WebSearch tool, US-only index, not
  Google) returned only unrelated "Chaitanya" religious pages. "Sai Chaitanya Parasana
  full-stack AI engineer" returned other people's portfolios. The site and its LinkedIn and
  GitHub profiles did not appear.
- **Limitation:** one sample from one non-Google index. Google Search Console data was not
  available, so Google's own brand position is unknown.
- **Inference:** the name entity is weak outside Google, and possibly inside it too. A
  portfolio's first job is to own its owner's name.
- **Next:** check GSC Performance for the query "chaitanya parasana" and URL Inspection for
  `/`. Strengthen the name-to-site link from profiles you control: the LinkedIn "Website"
  field, the GitHub profile URL and README, the Reddit profile, Stafflo's team or about page.
  Then F5 below.

### F2. Important: one URL is asked to rank for everything, and the body doesn't say what the description promises
- **Fact:** the meta description and `keywords` promise "voice agents", "freelance
  developer", "Next.js developer". The visible text says "voice assistants" once and
  "voice or chat" once. It never says "voice agent" or "freelance", and "hire" appears 0 times.
- **Inference:**
  - **Near-term track:** align the hero/About copy with the exact service words buyers use:
    "AI agents", "voice agents", "freelance / contract", "Hyderabad / remote". Then the snippet
    and the page agree. `keywords` meta is ignored by Google; leave it or delete it.
  - **Leadership track:** head terms like "AI engineer Hyderabad", "voice agent developer
    India" and "freelance Next.js developer" are owned by Upwork, Arc, Twine and job boards
    (2026-10-31 sample). A single anchor-only page can't own several head terms.
  - Category leadership needs one canonical URL per intent:
    - a services page per offer (AI agents, voice agents, full-stack builds);
    - one case-study page per shipped project (Stafflo modules, AI Platform, Vellum,
      ScoreDay, Orient), each with the problem, the build and the outcome.
  - This is a product decision: it changes the single-page FIELD v3 design.

### F3. Minor: project screenshots have no intrinsic size
- **Fact:** all 6 content `<img>` lack `width`/`height` attributes and use
  `width:100%;height:auto`. Two Stafflo images are hotlinked from `stafflo.ai` with
  `loading="eager"`.
- **Inference:** layout shift risk while images load, plus an eager download of two
  below-the-fold images.
- **Limitation:** the PageSpeed Insights API returned 429 (daily quota). CLS/LCP were not
  measured today.
- **Next:**
  - add `width`/`height` (or `aspect-ratio`) to each image;
  - make the hotlinked images `loading="lazy"`, or copy them into `public/work/`;
  - re-run Lighthouse (also open in `docs/STATE.md`).

### F4. Minor: `/favicon.ico` returns 404
- **Fact:** the page declares `/icon.svg` and `/apple-icon`; `/favicon.ico` is 404.
- **Inference:** Google accepts the declared SVG. Clients that request `/favicon.ico`
  directly (some Bing surfaces, older browsers, feed readers) get nothing.
- **Next:** add `src/app/favicon.ico` (Next.js serves it at the root).

### F5. Minor: structured data could name the page type and the company
- **Fact:** JSON-LD is a bare `Person`.
- **Next:** wrap it in `ProfilePage` with `mainEntity: Person`, the type Google documents for
  profile pages. Add `image` (the portrait or OG image) and
  `worksFor: {Organization: Stafflo, url: https://www.stafflo.ai}`, since the page states the
  co-founder role. Add sameAs only for profiles that visibly link back. Validate with the
  Rich Results Test. No rich-result outcome is promised.

### F6. Minor: sitemap `lastmod` is the build time
- **Fact:** `lastmod` was `2026-10-31T06:57:26Z`, the latest deploy, not a content change.
- **Inference:** Google ignores `lastmod` from sites where it is consistently wrong.
- **Next:** set it from the date of the last real content change, or drop it. `changefreq`
  and `priority` are ignored by Google and can go.

### F7. Minor: HTML document is heavy
- **Fact:** the `/` HTML is 251 KB: about 148 KB of RSC payload and 63 KB of inline `style`
  attributes from the generated `Markup.tsx`.
- **Next:** measure with Lighthouse (F3) before acting. Moving repeated inline styles to
  classes is the lever if TTFB or LCP suffer.

### F8. Informational: no `llms.txt` or Markdown mirror
- **Fact:** `/llms.txt`, `/sitemap.md`, `/index.md` are 404. `/api/me` serves a JSON resume
  but is disallowed in robots.
- **Inference:** optional. A short `llms.txt` plus `/index.md` mirroring the page is cheap for
  a one-page site, if someone keeps it in sync with `Markup.tsx`/`data.ts`. Neither file is
  required by any engine or guarantees retrieval or citation.

### Noted, no action
- `robots.txt` `Host:` line is Yandex-only and harmless.
- Recognition evidence links to Google Drive files. That's fine for proof; they won't be
  indexed as the site's content.

## Not done (limitations)
- No Search Console, Bing Webmaster or analytics export: no impressions, CTR, queries or
  index coverage.
- No Core Web Vitals today (PSI quota). No CrUX field data was checked.
- No keyword volume data source: query families come from the page's own claims and dated
  web-search samples, not volume.
- No formal multi-engine AI-answer research or visibility baseline.
