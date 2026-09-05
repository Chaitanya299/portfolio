# ADR-0006: Rebuild on the FIELD engine (custom scroll + 2D canvas), no animation/3D libraries

- Date: 2026-09-05
- Status: accepted
- Supersedes: none (replaces the earlier dark / React-Three-Fiber direction, never recorded as an ADR)
- Superseded by: none

## Context
The portfolio was rebuilt from the `design_handoff_portfolio_field/` handoff
(`Portfolio - FIELD.dc.html` is the source of truth): a single fixed-viewport,
six-chapter experience on a custom smooth-scroll stage, with a 2D-canvas particle
"field" and a wine curtain between chapters ("Bone paper & wine" palette). The previous
direction (dark theme, React-Three-Fiber 3D scroll) and its stack were dropped.

## Decision
Own the motion layer in plain code. One `requestAnimationFrame` loop drives a transformed
scroll stage (wheel / touch / keyboard — no native scroll, no Lenis); a 2D `<canvas>`
renders the particle field (no Three.js); reveals, counters, and the curtain are CSS
transitions plus imperative style writes. Styling is hand-written CSS custom properties —
no Tailwind. Engine lives in `src/components/field/` (`data.ts`, `canvas.ts`,
`chapters.tsx`, `Field.tsx`, `MobileChapterBar.tsx`).

## Why this over the alternatives
- React-Three-Fiber / Three.js — rejected: heavy bundle and GPU cost for an effect a 2D
  canvas delivers, and it made the animation *contain* the content, hurting SEO.
- GSAP / Framer Motion / Lenis — rejected: a single rAF loop with dt-scaled smoothing is
  smaller and gives exact control over the handoff's timings.
- Tailwind — rejected: the design is a fixed token set + `clamp()`/auto-fit; plain CSS is
  less indirection here.

## Trade-offs accepted
The engine is bespoke: scroll / curtain / reveal logic is maintained by hand, not a
library. Scroll position is not server-rendered (deep links switch chapter
post-hydration). Keeping timings faithful to the source file is manual work.

## Consequences
No Three.js / GSAP / framer-motion / Lenis / Tailwind / shadcn in the tree (129+ packages
removed). The page is a static, prerendered client component; the canvas is decorative
(`aria-hidden`) and all content is real semantic HTML behind it — the basis for
crawlability (see ADR-0008).
