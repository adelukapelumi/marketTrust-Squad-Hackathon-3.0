# Squad Integration Plan

## Positioning

Squad is the transaction truth layer for MarketTrust. It is not a decorative checkout add-on.

## Required Module Surface (Target)

- `createStaticVirtualAccount()`
- `initiateTaskFundingPayment()`
- `verifyPayment()`
- `handlePaymentWebhook()`
- `lookupBankAccount()`
- `initiateTransfer()`
- `requeryTransfer()`
- `validateWebhookSignature()`

## Rule Baselines

- never mark payment success from client callbacks alone
- verify payment server-side before changing core states
- store raw webhook payloads
- process webhooks idempotently
- requery uncertain transfer states
- prevent duplicate payouts

## Sprint Boundary

Sprint 1 defines schema and contracts only.
No live Squad integration is implemented in this session.
