# ADR-0005: Use Resend for transactional contact email

- Date: 2026-08-28
- Status: accepted
- Supersedes: none
- Superseded by: none

## Context
The contact/inquiry form needs reliable transactional email delivery. Established in
commit `2533e44`, which moved Resend initialization into the handler so builds and
pushes succeed even when the API key is not present at build time.

## Decision
Use Resend for transactional email, initialized inside the request/action handler
rather than at module load.

## Why this over the alternatives
- SMTP / nodemailer — rejected: more configuration and deliverability burden.
- SendGrid — rejected: heavier API than this single-form need warrants.

## Trade-offs accepted
Another third-party dependency and API key to manage and rotate.

## Consequences
Email sends from a Convex action; init-in-handler avoids build-time failures when
the environment is absent (CI, local without secrets).
