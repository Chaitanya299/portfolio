# ADR-0001: Record architecture decisions

- Date: 2026-08-28
- Status: accepted
- Supersedes: none
- Superseded by: none

## Context
This project has accumulated real architectural decisions (backend choice, CI/CD,
email provider) that live only in commit messages and one person's memory.

## Decision
Record each significant architectural decision as a numbered ADR in
`docs/decisions/`, one file per decision, never edited after acceptance.

## Why this over the alternatives
- A single architecture doc — rejected: it blurs *what* is true with *why* it was chosen.
- Nothing / tribal knowledge — rejected: lost the moment context changes.

## Trade-offs accepted
A small per-decision writing cost, and discipline to supersede rather than edit.

## Consequences
New work can read the relevant ADR before changing an area; reversals are explicit.
