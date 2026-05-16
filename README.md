## MarketTrust

MarketTrust is an intelligent economic platform for Squad Hackathon 3.0 Challenge 02.
It connects informal traders, job seekers, and financial services through verified economic activity:

- trader payments into static virtual accounts
- funded work opportunities
- verified work completion
- worker payouts
- behavioural signals for trust and financial readiness

## Challenge 02 Alignment

MarketTrust directly targets high youth unemployment and fragmented informal markets by:

- onboarding traders and workers digitally
- matching workers to funded tasks using explainable scoring
- using transaction and behaviour data instead of traditional credit history
- supporting inclusion-first channels (mobile-first now, USSD/SMS/WhatsApp next)
- building toward scalable national deployment patterns

## Squad Role

Squad is a core transaction truth layer, not decorative.
This sprint establishes schema and contracts that enforce:

- static virtual account payment identity for traders
- payment verification-first flow before task matching
- payout state tracking and anti-double-pay structures

## Tech Stack

- `pnpm` monorepo
- TypeScript across apps and packages
- Next.js (`apps/web`)
- NestJS (`apps/api`)
- PostgreSQL + Prisma (`packages/db`)
- shared contracts/config in `packages/*`

## Repository Structure

```txt
apps/
  api/
  web/
packages/
  db/
  types/
  config/
  utils/
docs/
  architecture.md
  api-contracts.md
  squad-integration.md
  data-signals.md
  demo-script.md
  judging-alignment.md
README.md
AGENTS.md
.env.example
package.json
pnpm-workspace.yaml
tsconfig.base.json
```

## Local Setup

1. Install dependencies:
   `pnpm install`
2. Copy env template:
   `cp .env.example .env` (or equivalent on Windows)
3. Generate Prisma client:
   `pnpm db:generate`
4. Run migrations (local dev):
   `pnpm db:migrate`

## Root Commands

- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm format`
- `pnpm typecheck`
- `pnpm db:generate`
- `pnpm db:migrate`
- `pnpm db:studio`

## Environment Variables

See `.env.example` for required keys:

- core app URLs
- database connection
- auth placeholder secret
- notification provider placeholders
- Squad placeholders for upcoming integration

## Sprint 1 Status (Current)

Completed in this session:

- monorepo root config and workspace setup
- shared TypeScript base config
- baseline lint/format setup
- `packages/db` Prisma schema foundation
- `packages/types` shared enums and DTO-like interfaces
- `packages/config` typed environment helpers
- `packages/utils` shared utility helpers
- documentation skeleton in `docs/`

Not yet implemented:

- backend business logic
- API endpoints
- Squad SDK/service integration
- frontend screens

## Sprint 2 Focus (Next)

- transaction spine implementation in `apps/api`
- Squad service/module integration and webhook verification
- task funding lifecycle enforcement (`AWAITING_FUNDING -> FUNDED -> MATCHING`)
- first demo-ready backend endpoints and seeded data
