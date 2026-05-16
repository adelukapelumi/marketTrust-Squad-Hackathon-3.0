# Architecture Overview

## Goal

Build a modular monolith that can evolve into service boundaries while keeping Challenge 02 flows reliable.

## High-Level Components

- `apps/api` (NestJS): domain and transaction orchestration
- `apps/web` (Next.js): trader, worker, and operator interfaces
- `packages/db`: Prisma schema and client
- `packages/types`: shared contracts/enums
- `packages/config`: typed environment loading
- `packages/utils`: generic helpers

## Domain Boundaries (Target)

- auth
- identity
- trader
- worker
- squad
- payment
- task
- matching
- verification
- payout
- trust
- financial readiness
- risk
- notification

## Core State Guarantees

- payment success is backend-verified only
- workers are matched only on funded tasks
- payout occurs only after verified completion
- audit/event traces are preserved for financial actions

## Data Foundation

Prisma models include users, trader/worker profiles, virtual accounts, payments, task funding, task matching, verification events, payouts, trust events, readiness profiles, notification logs, webhook events, audit logs, and disputes.
