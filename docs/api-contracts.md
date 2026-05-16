# API Contracts (Sprint 1 Skeleton)

This file documents early contract shapes to keep `apps/api` and `apps/web` aligned with shared `packages/types`.

## Shared DTO Sources

- `TraderOnboardingInput`
- `WorkerOnboardingInput`
- `CreateTaskInput`
- `FundTaskInput`
- `MatchResult`
- `VerificationSignal`
- `FinancialReadinessSummary`

## Contract Principles

- all monetary amounts are in `kobo`
- all transaction references are unique
- status transitions are explicit enums
- verification and payout events are append-friendly for auditability

## Planned Endpoint Groups (Sprint 2+)

- `/auth/*`
- `/traders/*`
- `/workers/*`
- `/payments/*`
- `/tasks/*`
- `/matching/*`
- `/verification/*`
- `/payouts/*`
- `/readiness/*`

## Out of Scope in Sprint 1

- endpoint implementation
- request validation pipelines
- Squad live integration payload mappings
