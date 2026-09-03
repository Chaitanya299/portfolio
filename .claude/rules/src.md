---
paths:
  - "src/**"
---
Conventions when editing files under `src/`.

- Components live in `src/components`; shared UI primitives in `src/components/ui` (shadcn). Data and config in `src/lib`; hooks in `src/hooks`.
- Server Components are the default. A component that needs state, effects, browser APIs, or 3D must start with `"use client"`.
- NO AI SLOP. Explicitly banned: harsh gradients, lucide/sparkle icons, pure-white or purple-black palettes, rainbow/neon colors, drop shadows, glass/backdrop-blur, three-feature-card rows, bento grids, terminal windows, "it's not X, it's Y" copy, checkmark bullets, radial orbs, dot/grid backgrounds, animated arrows, emojis, em dashes, blanket soft corner radii, basic pastels, and fake testimonials. One muted accent, real content, sharp detailing.
- NO CHEAP ANIMATIONS. No gratuitous hover wiggles, bounce-on-scroll, or decorative motion for its own sake. Motion serves the content — smooth scroll, purposeful 3D, one well-orchestrated reveal beats ten micro-interactions.
- STICK TO THE AGREED PROMPT AND DESIGN. Build what was specified; do not invent sections, copy, or flourishes that were not asked for. If something seems worth adding, propose it first.
