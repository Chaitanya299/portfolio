# Handoff: FIELD — Chaitanya Parasana portfolio

## Overview

A single-page personal portfolio for a full-stack / AI engineer. Six sections presented as
"chapters" inside one fixed viewport: a custom smooth-scroll stage moves the content, a
generative canvas "field" sits behind everything, and moving between chapters plays a
full-screen wine curtain transition.

Chapters:

| # | Key | Title | Meta label |
|---|-----|-------|------------|
| 00 | `home` | Opening (hero + About folded in) | Start here |
| 01 | `build` | What I Can Build | For you |
| 02 | `work` | Selected Work | Four things I finished |
| 03 | `roadmap` | On the Roadmap | What comes next |
| 04 | `recognition` | Recognition | Receipts |
| 05 | `contact` | Contact | Say hello |

## About the design files

The files in this bundle are **design references authored in HTML** — a working prototype of
the intended look, motion and behaviour. They are **not** production code to copy.

`Portfolio - FIELD.dc.html` is a "Design Component": one HTML file holding a template plus a
logic class, run by the bundled `support.js` runtime. Do not port `support.js` or the
Design-Component format into the target app. Instead **recreate the design in the target
codebase's environment** (React/Next, Vue, SvelteKit — whatever exists) using its own
patterns. If there is no codebase yet, Next.js + TypeScript with plain CSS or Tailwind is a
good fit; the animation work is easiest with GSAP (or hand-rolled rAF as the prototype does).

The prototype's logic class is a useful *specification of behaviour* — read it for the exact
easing, thresholds and formulas — not as a module to import.

## Fidelity

**High fidelity.** Colours, type, spacing, motion timings and copy are final. Recreate the
UI pixel-accurately. All copy in the prototype is approved and should be carried over
verbatim, including the deliberate house rules below.

House copy rules (enforce these):
- **No em dashes anywhere.** Use commas, colons or full stops. En dashes are allowed only in
  numeric ranges (`3–6 weeks`, `₹20k – 50k`).
- Sentence case in body copy; ALL CAPS with wide tracking only in the mono UI labels.
- The availability line names a month manually ("Free this September, usually reply the same
  day"). It is edited by hand each month, not computed.

---

## Design tokens

Palette is a set of 18 CSS custom properties on `:root`. Four palettes ship; **"Bone paper &
wine" is the default and the one to build**. Swapping palette = rewriting these variables.

### Bone paper & wine (default)

```css
--bg0: #fdfbf6;  /* lifted surfaces, curtain type, text on wine */
--bg1: #f9f6ef;  /* page background */
--bg2: #f1ece2;  /* card / panel fill (used at 60–70% mix) */
--bg3: #e8e0d4;
--bg4: #dccfc3;

--ln1: oklch(0.905 0.010 40);  /* faintest rule */
--ln2: oklch(0.862 0.016 34);  /* standard hairline — most borders */
--ln3: oklch(0.788 0.026 30);
--ln4: oklch(0.690 0.038 28);  /* checkbox border, mid dots */
--ln5: oklch(0.578 0.052 26);

--t4: oklch(0.605 0.030 26);
--t3: oklch(0.500 0.028 26);   /* mono UI labels */
--t2: oklch(0.398 0.026 26);   /* body copy */
--t1: oklch(0.312 0.030 26);   /* emphasised body */
--ink2: oklch(0.232 0.038 25);
--ink: oklch(0.178 0.042 24);  /* headings */

--ac: #8c2a35;                 /* wine accent */
--hl: oklch(0.40 0.10 25 / 0.055);
--shadow: oklch(0.30 0.070 25 / 0.24);
```

Notes:
- The neutral ramp is intentionally tinted toward the wine hue (~25–40°), not grey.
- Wine is used *dominantly*: primary button fill, chapter numeral outlines, active nav cell
  tint, section hairlines above key bands, the chapter curtain, the progress rail, the canvas
  field particles, all numerals in stat blocks, and every mono eyebrow label.
- Derived colours use `color-mix(in oklab, var(--ac) N%, transparent)` — keep that technique.

### Alternate palettes (ship as a theme switch only if asked)

`Charcoal & champagne` (`--ac: #e0c28f`), `Graphite & ice` (`--ac: #9dc6ea`),
`Oxide & terracotta` (`--ac: #d98a5c`) — all dark. Values are in the prototype's
`PALETTES` table.

### Typography

| Role | Family | Size | Weight | Tracking | Leading |
|---|---|---|---|---|---|
| Hero name (h1) | Archivo | `clamp(2.6rem, 10.6vw, 11rem)` | 600 | `-0.045em` | 0.86 |
| Chapter headline (h2) | Archivo | `clamp(1.8rem, 3.9vw, 3.2rem)` | 600 | `-0.03em` | 1.04 |
| Hero proposition | Archivo | `clamp(1.35rem, 2.9vw, 2.5rem)` | 500 | `-0.028em` | 1.12 |
| Item title (h3) | Archivo | `clamp(1.1rem, 1.7vw, 1.48rem)` | 500 | `-0.018em` | 1.2 |
| Body | Archivo | `0.93–1.16rem` (clamped) | 400 | 0 | 1.5–1.62 |
| Mono UI label | JetBrains Mono | 9–10.5px | 400 | `0.16–0.3em`, uppercase | 1.5 |
| Big stat numeral | Archivo | `clamp(1.5rem, 3vw, 2.4rem)` or `clamp(2.4rem, 5vw, 4.2rem)` | 600 | `-0.035em` | 1 |
| Chapter numeral | Archivo | `clamp(3.4rem, 9vw, 8rem)` | 700 | `-0.05em` | 0.8 |

Fonts: **Archivo** (400/500/600/700) and **JetBrains Mono** (400) from Google Fonts.
Chapter numerals are outlined, not filled: `color: transparent; -webkit-text-stroke: 1px
color-mix(in oklab, var(--ac) 55%, transparent)`. Numeric stats use
`font-variant-numeric: tabular-nums`. Long copy uses `text-wrap: pretty`.

### Spacing, radii, shadows

- Everything is fluid `clamp(min, vw/vh, max)`. Page padding:
  `clamp(104px,16vh,180px) clamp(20px,5vw,88px) clamp(56px,8vh,90px)`.
- Content column: `max-width: 1600px; margin: 0 auto`.
- Section rhythm: hairline top + `padding-top: 18px` for chapter headers; band gaps
  `clamp(16px,2.4vh,26px)` to `clamp(40px,6vh,80px)`.
- **Border radius is 0 everywhere** except small dots/pulses (`border-radius: 50%`). No
  rounded cards. This is load-bearing to the look.
- One shadow only, on the nav rail: `inset 0 1px 0 var(--hl), 0 18px 36px -24px var(--shadow)`.
- Grid pattern used throughout: `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` so every band
  collapses to one column without media queries.

### Motion

| Thing | Duration | Easing |
|---|---|---|
| Standard UI transition | 400–500ms | `cubic-bezier(0.16,1,0.3,1)` |
| Nav indicator slide | 620ms | `cubic-bezier(0.16,1,0.3,1)` |
| Curtain wipe in/out | ~700ms | `cubic-bezier(0.76,0,0.24,1)` |
| Curtain inner lift | 760ms | `cubic-bezier(0.16,1,0.3,1)` |
| Reveal word/char stagger | 900ms window, 110ms per unit | cubic in-out (`EASE`) |
| Work row hover slide | 600ms | `cubic-bezier(0.16,1,0.3,1)` |

Named keyframes: `fldPulse` (dot breathe 2.4s), `fldRipple` (availability ping 2.6s),
`fldShimmer` (skeleton 1.6s), `fldSpin` (submit spinner 0.75s), `fldBlink`,
`fldCue` (scroll cue bar 2.8s).

---

## Screens / views

Every chapter shares this frame:

1. **Chapter header** — hairline top, `padding-top: 18px`. Left: outlined chapter numeral +
   mono chapter title (letter-spacing `0.3em`). Right: mono meta label in `--t3`.
2. Content bands separated by hairlines, all inside the 1600px column.

### 00 Opening (hero + About)

Hero, in order:

1. **Eyebrow row** — 26×1px wine rule, `Full-stack and AI engineer`, `/` in `--ln5`,
   `Hyderabad, India`. Mono 10px, `0.24em`, `--t3`. Items `white-space: nowrap`, row wraps.
2. **h1** `CHAITANYA` / `PARASANA` (two lines, uppercase).
3. **Intro row** — hairline top, `flex-wrap` with `justify-content: space-between`:
   - Left (`flex: 1 1 min(100%,420px)`): proposition
     *"AI products that keep working after the demo is over."* (max 26ch) and below it
     *"Assistants you can talk to, search that understands a plain question, and the quiet
     machinery that keeps both running in production."* (max 52ch, `--t2`).
   - Right (`flex: 0 0 auto`): **primary CTA** — solid wine, 1px wine border, `--bg0` text,
     mono 10.5px `0.2em` uppercase, `padding: 14px 24px`, `min-height: 48px`, 5px pulsing
     `--bg0` dot; hover flips background and border to `--ink`. Under it the availability
     line: 6px wine dot with a rippling clone + *"Free this September, usually reply the same
     day"*.
4. **Next-chapter bar** — full width, wine hairline top **and** bottom,
   `padding: clamp(13px,1.8vh,18px) 0`, `justify-content: space-between`. Left: 2px wine bar
   animating `fldCue`. Middle: mono wine `Chapter 01 of 05 · next` over
   `What I Can Build →` (`clamp(1.15rem,2.4vw,1.9rem)`, 600). Right: mono `--t3`
   `Or keep scrolling`. Whole bar navigates to chapter 01.
5. **Metric strip** — 4 cells, `repeat(auto-fit, minmax(min(46%,150px), 1fr))`, each with a
   hairline top: wine numeral + mono `--t3` caption.
   `500ms / Live answer, voice or chat` · `99.9% / Uptime I design for` ·
   `5 / Projects shipped end to end` · `1 / Person, start to finish`.
   **This band must not animate in on load — it reveals only once the user scrolls.**

About, folded into the same chapter below the hero (its own `About / Who I am` header row):

- Two columns, `minmax(min(100%,400px),1fr)`, `align-items: start`.
- Left: h2 *"Most AI demos fall apart the first time a real person uses them. I build the
  **version that holds**."* (last phrase in wine), then two paragraphs, then five bordered
  mono tags: `Voice agents`, `AI agents and SLM`, `Web development`, `Freelance work`,
  `Mac and mobile apps`.
- Right: mono wine label **What I do**, then three numbered rows (hairline separated,
  `clamp(38px,4vw,64px) 1fr` grid): `01 Automating the work that eats your day`,
  `02 AI that answers the moment someone asks`, `03 Shipping it, then keeping it up`.
  These three are the single canonical service list for the home page — do not duplicate
  them in the hero.

### 01 What I Can Build

- **Intro band**: hairline top; h2 *"Five things I get asked for, in **plain words**."*
  (`flex: 1 1 420px`) and the paragraph *"Here are the five things people usually come to me
  for. Pick the one that sounds like what you need, and let's talk about it."*
  (`flex: 1 1 340px`), space-between.
- **Five service rows**, full width, hairline between each (last also has a bottom rule).
  Row grid: `clamp(34px,3.6vw,54px) 1fr auto` = wine number · body · timeline (mono 9.5px
  `--t3`, right aligned, `nowrap`). Body is an inner `flex-wrap` row: title
  `flex: 1 1 210px; max-width: 24ch` and description `flex: 2 1 320px; max-width: 58ch`, so
  titles and descriptions line up as columns across rows and stack on narrow screens.

  | # | Title | Timeline |
  |---|-------|----------|
  | 01 | Agents you can talk to | 3–6 weeks |
  | 02 | A website for your business | 6–10 weeks |
  | 03 | An app for Mac or your phone | 4–8 weeks |
  | 04 | A tool for your own team | 2–5 weeks |
  | 05 | Getting what you have live | 1–3 weeks |

  Footnote under the list: wine 22×1px rule + *"Timelines assume one person working properly"*.
- **Numbers band** — wine hairline top, `--ln2` bottom, mono 10px uppercase `--ink`, wine
  numerals, `·` separators in `--ln4`:
  `5 projects shipped · 1+ years · Same-day replies · One person, start to finish`.
- **Closing 3-up** (`minmax(min(100%,280px),1fr)`): `How it starts` (with the secondary CTA
  — wine 1px border, wine text, transparent fill, inverting to wine fill + `--bg0` text on
  hover), `What you keep`, `How I price it`. Each has a mono wine label + paragraph.

### 02 Selected Work

Four expandable rows. Collapsed row is a `button` (grid `clamp(38px,4vw,64px) 1fr auto`):
wine number, large title (`clamp(1.55rem,4.1vw,3.3rem)`, 600), one-line summary, mono tech
tags, and a plus/minus glyph box on the right. Titles: **k8s GitOps Lab**, **Vellum**,
**ScoreDay**, **Orient** (capital O). Hover slides the title `translateX(14px)` and tints
the glyph border wine; on desktop it also raises a 270×170 skeleton preview card that
follows the cursor. Expanding animates a height panel open (`aria-expanded` on the button)
containing three columns — `How it works`, `Why it matters`, `The tricky part` — plus a
GitHub link with an `↗`, and a 120px-tall placeholder frame.

### 03 On the Roadmap

Headline *"Four things I am building **right now**."* Behind the cards, an SVG of four
hairline branch paths (`--ln3`, `vector-effect: non-scaling-stroke`) whose `stroke-dashoffset`
draws in on scroll. Four `article` cards, `minmax(min(100%,300px),1fr)`, each: hairline top,
status row (pulsing wine dot + `Building now` / `In testing` / hollow dot + `Planning`, with
the date right-aligned), title, a wine-tinted lead line, a body paragraph, and mono tech tags
separated by `·`. Cards: **MonFlow** (Late 2026), **JobAutomator & Crawler** (Mid 2026),
**Edge Assistant** (Early 2027, SLM), **Chatbot Builder** (Late 2026).

### 04 Recognition

- Four-cell counter band (hairline top and bottom): three counters animate 0 → target on
  scroll (`4`, `4`, `3`, zero-padded to two digits) plus a wine `●` for
  `Brown belt, martial arts`.
- Four certificate rows: grid `clamp(38px,4vw,64px) 1fr auto`, wine number, title
  (`clamp(1.2rem,2.4vw,1.9rem)`) sliding `translateX(12px)` on hover, description, issuer +
  `↗`. All open Drive links in a new tab.
- Closing 3-up with wine-mixed hairline tops: `Money and markets`, `Martial arts`,
  `Away from the desk`.

### 05 Contact

- **Headline band**: `LET'S / TALK` (`clamp(2.6rem,10.5vw,10rem)`, uppercase) with the wine
  trust line beside it: *"No sales pitch back. Just a straight answer on whether I'm the
  right person for it."*
- **Two columns** (`minmax(min(100%,360px),1fr)`), hairline top:
  - Left: availability paragraph; then a copy-email button (wine hairline top, mono wine
    `Copy` label that becomes `Copying` → `Copied` for 1.9s) and GitHub / LinkedIn rows
    (`min-height: 52px`, hover adds `padding-left: 10px`); then **What happens next** —
    three numbered lines (`01` read and reply same day, `02` half-hour call, `03` written
    plan, fixed price, date, free demo).
  - Right: the form, in a 1px `--ln2` panel filled
    `color-mix(in oklab, var(--bg2) 60%, transparent)`, `padding: clamp(20px,3.2vw,38px)`.
- **Footer row**: hairline top, `© 2026 Chaitanya Parasana` and a `Back to the start ↑`
  button that navigates home.

#### Contact form spec

Fields, in order:

1. `name` — text, `autocomplete="name"`, placeholder `Ada Lovelace`.
2. `email` — email, `autocomplete="email"`, placeholder `ada@example.com`.
   (1 and 2 sit in a `minmax(min(100%,200px),1fr)` grid, so they pair up and stack.)
3. `need` — **checkbox group**, legend `What you need`, two-up grid:
   `An AI agent or assistant` · `A website or portfolio` ·
   `A native app (Mac or phone)` · `An internal tool or dashboard` ·
   `Deploy and maintain what I have` · `Not sure yet, help me figure it out`.
4. `budget` — select: `₹20k – 50k ($250 – 600)`, `₹50k – 1.5L ($600 – 1,800)`,
   `₹1.5L – 4L ($1,800 – 5,000)`, `₹4L – 10L ($5,000 – 12,000)`, `₹10L+ ($12,000+)`,
   `Not sure yet`.
5. `timeline` — select, labelled `Timeline (optional)`: `As soon as possible`,
   `Within 1–2 months`, `Just exploring for now`.
6. `message` — textarea, 4 rows, `resize: vertical`, placeholder *"One or two lines about the
   project. What it is, and what you're stuck on."*

Field styling: transparent background, no border except a 1px `--ln2` bottom rule,
`min-height: 48px`, `padding: 12px 2px`, `font-size: 1rem` (≥16px so iOS does not zoom),
`border-radius: 0`. On focus the bottom rule turns wine; on blur back to `--ln2`.
Selects are `appearance: none` in mono 0.95rem.

Checkboxes are `appearance: none`, 15×15px, 1px `--ln4` border. Checked state is painted in
JS: wine fill, wine border, `inset 0 0 0 2px var(--bg1)` so the fill reads as an inset
square. Each label is `min-height: 44px`.

Submit: solid wine button, `min-height: 48px`, mono 10px `0.2em`, label `Send it` + `↗`
glyph, hover to `--ink`.

Validation and submit behaviour (mock in the prototype — wire to a real endpoint):
- Invalid if name is empty, email has no `@`, or message is under 10 characters. Status text
  becomes `Please add a name, an email, and a line or two` in `oklch(0.74 0.13 35)`.
- On submit: label → `Sending`, glyph → spinning `--bg0` ring, status → `On its way`.
- After ~1.5s: label → `Got it`, glyph → `✓`, status → `Thanks. I will reply to that
  address.` in wine, form resets (including repainting the checkboxes), label returns to
  `Send it` after 4.2s.

---

## Interactions & behaviour

### Custom scroll stage

The page does **not** use native document scroll. Structure:

```
[data-fld=viewport]   position: fixed; inset: 0; overflow: hidden
  canvas              absolute, inset 0, z 0            (the field)
  vignette + grain    absolute, z 1 / z 6, pointer-events none
  [data-fld=stage]    absolute, top 0, width 100%, z 2  (translated on Y)
    one div per chapter; only the active chapter is display:flex/block
  fixed chrome        header, nav rail, progress rail, cursor, curtain (z 4–12)
```

- A `scroll` object holds `{ target, current, prev, max, vel }`. Wheel and touch write
  `target`; each frame `current += (target - current) * smooth(0.085, dt)`; the stage gets
  `translate3d(0, -current, 0)`.
- `smooth(k, dt)` is frame-rate independent exponential smoothing, so the feel is identical
  at 60, 120 and 144Hz. **Every** easing in the loop is scaled by real elapsed `dt`, clamped
  to 1–50ms so a stalled tab cannot jump.
- Wheel: `preventDefault`, normalising `deltaMode` 1 (`×18`) and 2 (`×viewport height`).
- Touch: `touchmove` moves `target` at 1.7× finger delta; `touchend` adds a flick impulse
  (`velocity × 190`, capped at ±1.1 viewport heights).
- Keyboard: `1`–`5` jump to chapters, `0`/`Escape` home, arrows ±90px, PageUp/Down and
  Space ±0.9 viewport, Home/End to the ends. Ignored while focus is in an input, textarea or
  select.
- A 1s interval watchdog re-arms `requestAnimationFrame` if the loop has stalled over 900ms
  (backgrounded tab).
- `focusin` scrolls a focused field into view within the stage. Never use
  `scrollIntoView` — it breaks the fixed viewport.

### Reveals

Elements marked `data-reveal` register with a scroll window. Those starting inside the first
viewport play an intro stagger on load (110ms apart); everything else eases in as it enters.
`data-reveal="scroll"` **opts out of the intro** — the hero metric strip uses this so the
numbers appear only after the user starts scrolling. `data-split="words"` / `"chars"` wraps
each unit in a span that rises from `translateY(112%)` with a 0.55 stagger span. Scroll
velocity also drags reveal layers at four different depths (0.16–0.55) for parallax that
settles back to the grid when scrolling stops.

### Chapter navigation and curtain

Nav rail, chapter links, and keys all call `navigate(key)`: lock input, wipe the wine curtain
up over the screen (`clip-path: inset(100% 0 0 0)` → `inset(0)`), swap which chapter div is
displayed, reset the stage to 0, re-collect reveals, wipe the curtain away, unlock. The
curtain shows the incoming chapter's number and title in `--bg0` on wine.

### Header, nav rail, progress

- Header: logo/monogram left, chapter rail centre, status cluster right. Below 900px the
  status cluster hides; below 1080px the keyboard hint hides.
- Nav rail: 1px `--ln3` border, blurred gradient fill, one sliding indicator plate
  (`--bg4`-tinted wine, 1.5px wine bottom border) that tracks the active cell over 620ms.
  The rail is `flex-wrap: nowrap; overflow-x: auto` with hidden scrollbars, so on phone and
  tablet it scrolls sideways instead of wrapping. If it ever does wrap (height > 62px) the
  indicator hides and the active cell carries its own wine tint instead.
- Progress: 1px vertical rail on the right (`top: 24%; bottom: 24%`) with a wine fill, a
  rotated 7px diamond head, and a vertical two-digit percentage. Updated only when the value
  actually changes.
- Custom cursor (desktop only, disabled on touch and when `cursorMode: native`): a dot that
  lerps toward the pointer with per-element labels via `data-cursor` / `data-cursor-label`
  (`explore/Go`, `project/Read more`, `link/Open`). Native cursor is hidden inside the
  viewport.

### Canvas field

A 2D canvas particle system (no WebGL, no Three.js in this prototype). 900 particles above
1400px, 680 above 900px, 300 below, scaled by a density setting. Six normalised point
formations — `nucleus`, `splay`, `lattice`, `branch`, `rings`, `converge` — one per chapter;
the field lerps toward the current chapter's formation and leans 42% toward the next as you
read down. Five render styles (`Drifting veil` default, `Nodes and threads`,
`Constellation web`, `Silk filaments`, `Orbit trails`). Ink colour comes from the palette
(`fieldInk: #7d3540`, `fieldWeb: 140,42,53` for the default palette) because canvas cannot
read CSS variables. Devicepixel ratio is capped at 1.75 desktop / 1.4 touch.

### Preloader

Full-screen `--bg0` panel with a progress bar and rotating status text, wiping up
(`clip-path`) when ready, then arming the intro stagger.

## State management

Prototype state is all instance fields, not React state. In a component framework:

| State | Purpose |
|---|---|
| `pageIdx` / `pageKey` | active chapter (also drives nav, curtain, field formation) |
| `scroll {target, current, prev, max, vel}` | the smooth-scroll stage |
| `locked` | input lock during curtain transitions and preload |
| `motion` | `full` / `calm` / `still`, seeded from `prefers-reduced-motion` |
| `cursorMode` | `full` / `minimal` / `native` |
| `palette`, `fieldStyle`, `fieldDensity`, `accentColor` | theme settings |
| `sending`, form status text | contact form lifecycle |
| open work row index | expandable Selected Work panels |
| counters done flags | one-shot count-up animations |
| `touch` | `matchMedia('(hover: none)')` — disables cursor and wheel handling |

No data fetching anywhere. The only network work to add is the contact form POST.

## Responsive behaviour

- No media queries in CSS. Every band is `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` and
  every type size is `clamp()`, so phone → tablet → desktop is continuous.
- Two JS breakpoints only: 900px (hide header status cluster, drop particle count) and
  1080px (hide keyboard hint).
- Touch targets: 44px minimum on checkbox labels, 48px on buttons and inputs, 52px on
  contact link rows.
- Inputs are ≥16px to stop iOS zoom-on-focus.
- Custom cursor, wheel handling and hover previews are disabled on touch; flick momentum
  replaces them.

## Performance targets

Runs unthrottled at the display refresh rate (120Hz on ProMotion iPad/iPhone):

- One `requestAnimationFrame` loop for everything. No `setInterval` animation, no CSS
  transitions on scroll-driven properties.
- All motion is `dt`-scaled, so higher refresh means smoother, never faster.
- Per-frame DOM writes are gated on change: reveals skip unless progress moves 0.002,
  chapter numerals skip unless their factor moves 0.002, the progress rail writes only when
  the percentage changes.
- Only `transform` and `opacity` are animated; layers use `will-change` and
  `backface-visibility: hidden`.
- Canvas is redrawn once per frame with batched paths, `globalAlpha` grouping, and no
  per-particle state churn; DPR capped as above.

## Assets

None bundled. Everything is CSS, canvas or text.
- Fonts: Google Fonts — Archivo, JetBrains Mono.
- The grain overlay is an inline SVG data URI at `opacity: 0.045`.
- Work-panel visuals and the hover preview card are **placeholder frames** — real
  screenshots still need to be supplied.
- External links: `github.com/Chaitanya299` (+ four repo links), the LinkedIn profile, and
  four Google Drive certificate links.

## Files

| File | What it is |
|---|---|
| `Portfolio - FIELD.dc.html` | The full design: template + logic class. Read the logic class for exact motion formulas. |
| `Portfolio - FIELD v1 (scroll).dc.html` | Earlier native-scroll version, kept for reference only. |
| `support.js` | Runtime that renders the Design Component. **Do not port.** Included only so the HTML opens in a browser. |

Open either HTML file directly in a browser to see the design running.
