# ADR-0009: "Ask about my work" assistant on the Claude API (Haiku 5.5)

- Date: 2026-10-17
- Status: accepted
- Supersedes: none
- Superseded by: 0010

## Context
The hero claims a "500ms live answer, voice or chat". Nothing on the page proved it.
Adding an LLM means a new external dependency, a per-request cost, and a public endpoint
that strangers can call.

## Decision
A hero input streams answers from `POST /api/ask` (`@anthropic-ai/sdk`,
`claude-haiku-5-5`, thinking off, effort low, `max_tokens` 1024). It is grounded only in
the site's own content (`src/components/field/data.ts`) as a cached system prompt, with no
tools. The UI shows the measured time to first word.

## Why this over the alternatives
- Claude Opus 5.5: rejected, about 40x the cost, and thinking can't be disabled, so the
  first word arrives slower.
- Claude Sonnet 5.5: rejected, middle cost with no need for its depth on short factual answers.
- No assistant: rejected, the 500ms claim stays unproven.

## Trade-offs accepted
About $0.0005 per question. The rate limit is in-memory per instance (15 per 10 min per
IP), so it is a speed bump, not a guarantee. The hard cap is the monthly spend limit set in
the Anthropic Console.

## Consequences
`ANTHROPIC_API_KEY` is required in Vercel. The limiter moved to a shared
`src/lib/rate-limit.ts` that the contact route also uses. Upgrade path if abused: an
Upstash/KV-backed limiter.
