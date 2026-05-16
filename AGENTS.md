# AGENTS.md

## Product Mission

MarketTrust is an intelligent economic platform for Squad Hackathon 3.0 Challenge 02.
It connects:

1. informal traders
2. job seekers / unemployed youth
3. financial services

using verified transactions, funded work opportunities, behavioural signals, and explainable scoring.

## Non-Negotiable Rules

1. Squad API is core, not decorative.
2. Static virtual accounts are the default trader payment mode.
3. Workers only receive funded tasks after backend verification.
4. Never assume customer phone numbers.
5. Client-side payment success is never trusted.
6. Explainable scoring comes before complex ML.
7. Financial readiness is not instant loan approval.
8. Keep channels inclusive (mobile now, USSD/SMS/WhatsApp compatible backend).

## Canonical Flow Guardrails

### Funded task gating

```txt
trader creates task
-> task AWAITING_FUNDING
-> payment verified server-side
-> task FUNDED
-> matching begins
-> worker alert
```

### Verified payout gating

```txt
task VERIFIED
-> payout initiated
-> transfer status tracked
-> requery uncertain state
-> worker notified
```

## AI and Data Principles

- AI must influence real decisions (match, trust, readiness, risk).
- Scores must be explainable with visible contributing signals.
- Do not present scores as irreversible verdicts.
- Use conservative readiness language and tiers:
  `PAYMENTS_ONLY`, `SAVINGS_READY`, `INSURANCE_READY`, `CREDIT_PREQUALIFIED`, `HIGH_TRUST`.

## Coding Conventions

- Use TypeScript for all new application and package code.
- Keep modules small, readable, and consistent with names in domain docs.
- Prefer explicit enums for lifecycle/status values.
- Preserve auditability for transaction and payout states.
- Use kobo for money values in storage and integrations.
- Keep business logic server-side; frontend should not finalize financial state.
- Avoid fake integrations and placeholder logic that misrepresents Squad capabilities.

## Repository Conventions

- Apps:
  - `apps/api` for backend implementation
  - `apps/web` for frontend implementation
- Shared packages:
  - `packages/db` Prisma schema/client
  - `packages/types` shared enums and contracts
  - `packages/config` typed config/environment helpers
  - `packages/utils` shared utilities
- Documentation in `docs/` must stay aligned with implemented behavior.

## Definition of Good Sprint Progress

- Feature design maps to Challenge 02 goals.
- Squad transaction flows are structurally supported in schema and contracts.
- Task funding and payout safety rules are enforced by status transitions.
- Data model supports trust/readiness/risk signal generation over time.
- Demo path can be explained end-to-end without contradictory states.
