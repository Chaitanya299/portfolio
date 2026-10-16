# ADR-0010: Ask assistant moves to the Groq free tier (gpt-oss-20b)

- Date: 2026-10-17
- Status: accepted
- Supersedes: 0009
- Superseded by: none

## Context
ADR-0009 put the hero assistant on Claude Haiku 5.5 at about $0.0005 per question. The
owner wants the feature to cost nothing. Free options considered had different catches:
FreeLLMAPI is a self-hosted gateway (a second always-on server to run), and Groq's free tier
caps the whole site at 8K tokens/min, 1K requests/day and 200K tokens/day per model, while
the grounding prompt is about 3K tokens on every question.

## Decision
`/api/ask` calls Groq's OpenAI-compatible endpoint directly with `fetch` (no SDK) using
`openai/gpt-oss-20b` (`reasoning_effort: "low"`, `include_reasoning: false`) and streams the
answer as plain text. Free limits are per model, so on a 429 it falls back to
`openai/gpt-oss-120b`, then `qwen/qwen3.8-27b` (reasoning off). The system prompt (site
facts) is sent first so it is a stable prefix for Groq's prompt caching. Em dashes are
replaced on the stream because the models don't follow the house rule reliably.
Key: `GROQ_API_KEY`.

## Why this over the alternatives
- Claude Haiku 5.5 (ADR-0009): rejected, not free.
- FreeLLMAPI: rejected, needs its own public server and rotates between models, so speed
  and quality vary per question.
- `qwen/qwen3.8-27b` as the primary: rejected, no prompt caching, so each question spends
  the full ~2.4K tokens; kept as the last fallback.
- `openai/gpt-oss-120b` as the primary: better answers but slower; kept as the first fallback.
- A single model: rejected after testing; caching hit about 1 request in 3, so ~3 questions
  in one minute exhausted the 8K bucket and visitors saw "busy".

## Trade-offs accepted
Not Claude. gpt-oss reasons briefly (about 10 tokens), which adds a little to the time to
first word (measured 275 to 680ms). Free limits are shared by every visitor; with three
models the site gets roughly 3x the room before the box says the assistant is busy.
Caching is best-effort and expires after 2 hours idle. Answers can differ slightly in
style depending on which model served them.

## Consequences
`ANTHROPIC_API_KEY` and `@anthropic-ai/sdk` are no longer used. `GROQ_API_KEY` is required
in Vercel. The per-IP limiter, input caps, grounding, and UI from ADR-0009 are unchanged.
