# ADR-0008: SEO and rendering strategy — static semantic HTML, animation as enhancement

- Date: 2026-09-05
- Status: accepted
- Supersedes: none
- Superseded by: none

## Context
The site is heavily animated (custom scroll, canvas field — ADR-0006). For a portfolio
the content must be crawlable and indexable independent of the visual layer, and it needs
a real production domain, verified search properties, and field performance data.

## Decision
Keep all content as static-prerendered semantic HTML and let the animation *enhance* it,
never contain it. Concretely: the page renders as `○ (Static)`; the canvas is
`aria-hidden`; there is one `<h1>` (hero) plus an `<h2>` per chapter and `<h3>` sub-items;
chapter nav is real `<a href="#…">` (the always-rendered mobile bar). Metadata, robots,
sitemap, the OG image, Person JSON-LD, and the canonical URL are generated from a single
source (`src/lib/site.ts`, canonical `https://www.chaitanyaparasana.com`). Field
performance is measured with Vercel Analytics + Speed Insights.

## Why this over the alternatives
- Rely on Googlebot rendering the animated DOM — rejected: fragile; content must exist in
  the initial HTML regardless of JS execution.
- A separate static "SEO" page — rejected: duplicate content; the real page already
  server-renders its text.

## Trade-offs accepted
Inactive chapters render `display:none` in the DOM (still crawlable, deduped by the
canonical). Custom-domain DNS lives at Spaceship; `www` is the primary and the apex
308-redirects to it, so the canonical is the `www` host.

## Consequences
`/robots.txt`, `/sitemap.xml`, `/opengraph-image`, a branded `not-found`, and the open-C
`icon.svg` / `apple-icon` favicon all ship from the app (nothing is uploaded to Vercel).
Google and Bing are verified via meta tags and the sitemap is submitted.
