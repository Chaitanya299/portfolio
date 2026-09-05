# ADR-0007: Remove Convex; send contact email directly with Resend from a Next Route Handler

- Date: 2026-09-05
- Status: accepted
- Supersedes: ADR-0002
- Superseded by: none

## Context
Convex (ADR-0002) was adopted for live data and a future RAG chatbot, and hosted the
contact-email action. The RAG direction was dropped and the FIELD rebuild (ADR-0006) made
the page self-contained; the only remaining backend job was the contact form. That form
was posting to a stub `/api/contact` route that never reached Convex, so submissions did
nothing.

## Decision
Delete Convex entirely — schema, functions, generated files, the `convex`/`zod`
dependencies, and `vercel.json`'s `npx convex deploy` build command. The contact form
posts to a Next Route Handler (`src/app/api/contact/route.ts`) that sends the email with
Resend directly, initialized inside the handler (per ADR-0005). No database.

## Why this over the alternatives
- Keep Convex and wire the form to it — rejected: a whole hosted backend plus a second
  deploy key for one email; the site no longer needs live data or a document store.
- A form service (Formspree / Web3Forms) — rejected: another third party when a Route
  Handler plus the existing Resend key is a few lines.

## Trade-offs accepted
No stored log of inquiries (the inbox is the record). Rate limiting is in-memory and
per-instance — a courtesy speed bump, not a hard guarantee; swap to Upstash/KV if abuse
appears. Refines ADR-0005: email now sends from a Route Handler, not a Convex action.

## Consequences
Deploy needs only `RESEND_API_KEY`; `CONVEX_DEPLOY_KEY` and `NEXT_PUBLIC_CONVEX_URL` are
gone. The route validates input, escapes HTML, strips newlines from the name (no header
injection), runs a honeypot, and reflects the true send result to the user instead of a
faked success.
