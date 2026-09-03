# ADR-0002: Use Convex as the backend for live data and email actions

- Date: 2026-08-28
- Status: accepted
- Supersedes: none
- Superseded by: none

## Context
The portfolio needed a data layer for its content that stays live for all visitors
and is ready for a future domain-aware RAG chatbot. Established in commit `f5a5b8f`
("finalize Portfolio OS architecture and security").

## Decision
Use Convex as the backend for portfolio data and server-side actions (including the
contact-email action), instead of a traditional REST + SQL stack.

## Why this over the alternatives
- Postgres + a hand-rolled API — rejected: more infrastructure, no built-in reactivity.
- Static MDX content — rejected: no live updates and no place for server actions.

## Trade-offs accepted
Vendor coupling to Convex, and the team must learn its query/mutation/action model.

## Consequences
Every data read is reactive; the `documents` schema is positioned for vector
embeddings; transactional email runs as a Convex action rather than a separate service.
