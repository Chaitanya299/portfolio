# Implementation: near-term fixes (2026-10-31)

Status: implemented locally and committed; not pushed. Owner: Chaitanya Parasana.
Decision: keep the single page (no service or case-study pages) and fix F1 to F8 inside the
current design. Plan: `~/.claude/plans/plan-service-pages-and-fuzzy-dongarra.md`.

## Changes

| Finding | Change | Files |
| --- | --- | --- |
| F2 copy | Hero eyebrow "Freelance full-stack and AI engineer"; hero sub starts "Voice agents and chat assistants"; service 01 "Voice and chat agents you can talk to"; About adds "You can hire me for a single build or a longer contract, remote or from Hyderabad." | `Markup.tsx`, `data.ts` |
| F3 images | width/height on all 6 content images; all lazy + async decode (the two Stafflo hotlinks were eager) | `Markup.tsx` |
| F4 favicon | `favicon.ico` (16/32/48) rendered from `icon.svg` with sharp | `src/app/favicon.ico` |
| F5 schema | `ProfilePage` with `mainEntity` Person + `image`, `worksFor` Stafflo, `dateModified`; `<` escaped | `layout.tsx` |
| F6 sitemap | `lastmod` = `CONTENT_UPDATED` (2026-10-31); changefreq/priority dropped | `site.ts`, `sitemap.ts` |
| F8 llms.txt | `/llms.txt` and `/index.md`, both static, generated from `data.ts`; `index.md` sends `Link: rel="canonical"` to `/` | `src/lib/markdown.ts`, two route handlers |
| A11y (found by Lighthouse) | booking calendar `role="grid"` → `role="group"` (it has no row/gridcell children) | `Booking.tsx` |

F1 (name entity) also needs off-site links the owner controls; listed in the final report.

## F7: measured, no refactor

Lighthouse 12.8.2, mobile, default throttling.

| Run | Perf | A11y | BP | SEO | LCP | Speed Index | CLS | TBT | Total bytes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Before: live site (`4b122cd`) | 65 | 95 | 100 | 100 | 14.0 s | 12.2 s | 0 | 20 ms | 4,827 KiB |
| After: local production build | 93 | 95* | 96† | 100 | 3.2 s | 1.0 s | 0 | 0 ms | 605 KiB |

- **\* Accessibility:** the after run predates the `role="group"` fix.
- **† Best practices:** the local server 404s Vercel's analytics scripts, which only exist
  on Vercel.
- **Different environments:** the runs are on different hosts (Vercel CDN vs localhost), so
  repeat the after run on the live site once deployed.
- **Document size:** the 251 KB HTML is 30 KB compressed and served in 20 ms. Document
  weight was not the bottleneck. The eager-loading screenshots were (about 4.2 MB), and lazy
  loading removes them from the first load. The inline-style refactor is not needed now.

## Verification done
- `bun run tests/seo-routes.test.ts .` (new, 8 checks) and `tests/book-route.test.ts` pass.
- ESLint and tsc are clean. `next build` lists `/llms.txt` and `/index.md` as static.
- On the local production server:
  - `/favicon.ico` 200 `image/x-icon`, with the `<link rel="icon">` added;
  - `/llms.txt` and `/index.md` 200 UTF-8, with the canonical Link header;
  - sitemap `lastmod` 2026-10-31;
  - JSON-LD parses as ProfilePage;
  - 6/6 images sized and lazy, with rendered aspect ratios matching the attributes;
  - hero, About and service card render the new copy, and the particle field runs.

## Pending
- Push (owner approval), then re-check on the live site and run the Rich Results Test.
- Re-run Lighthouse on the live site.
- Off-site links and the Search Console steps (owner).
