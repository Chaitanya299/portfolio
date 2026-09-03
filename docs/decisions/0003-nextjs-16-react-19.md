# ADR-0003: Build on Next.js 16 App Router with React 19

- Date: 2026-08-28
- Status: accepted
- Supersedes: none
- Superseded by: none

## Context
The portfolio needed strong SEO, minimal client-side JavaScript, and room for
interactive/3D work. Established at scaffold (`2ae3d88`) and confirmed while
resolving a React 19 script-injection warning (`fa64823`).

## Decision
Build on Next.js 16 (App Router) with React 19, Server Components by default and
client components opted in via `"use client"`. API routes live under `src/app/api`.

## Why this over the alternatives
- Vite SPA — rejected: weaker SEO, no React Server Components.
- Astro — rejected: less suited to the app-router + interactive 3D flow planned.

## Trade-offs accepted
Running on the newest majors (Next 16 / React 19) means some libraries need
compatibility care — e.g. React Three Fiber must be v9.

## Consequences
RSC-first rendering keeps client JS small; interactive and 3D pieces are isolated
behind `"use client"` boundaries.
