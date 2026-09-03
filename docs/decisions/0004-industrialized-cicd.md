# ADR-0004: Industrialized CI/CD with Docker, Kubernetes, and GitHub Actions

- Date: 2026-08-28
- Status: accepted
- Supersedes: none
- Superseded by: none

## Context
The project moved from ad-hoc deploys to production-grade, cloud-portable
infrastructure, partly to demonstrate real engineering capability. Established in
commit `18a590d` ("industrialize CI/CD and infrastructure").

## Decision
Use a multi-stage `Dockerfile` (Next.js `standalone` output), Kubernetes manifests
with liveness/readiness probes wired to `/api/health`, and a GitHub Actions pipeline.

## Why this over the alternatives
- Vercel-only — kept as an option, but not the sole path: the goal was portable,
  cloud-agnostic infra that also reads as a technical signal.
- Single-stage Docker — rejected: larger images, build tooling shipped to production.

## Trade-offs accepted
More moving parts to maintain than a fully managed platform would require.

## Consequences
Portable to AWS EKS or Vercel Edge; health probes in place; secrets patterned for
`GITHUB_TOKEN` and `CONVEX_URL`.
