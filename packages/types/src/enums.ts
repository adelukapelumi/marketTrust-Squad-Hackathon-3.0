export const USER_ROLES = [
  'TRADER',
  'WORKER',
  'OPERATOR',
  'FINANCIAL_PARTNER',
  'ADMIN',
] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const TASK_STATUSES = [
  'DRAFT',
  'AWAITING_FUNDING',
  'FUNDED',
  'MATCHING',
  'ASSIGNED',
  'IN_PROGRESS',
  'SUBMITTED_FOR_VERIFICATION',
  'VERIFIED',
  'DISPUTED',
  'PAID_OUT',
  'CANCELLED',
  'EXPIRED',
] as const;
export type TaskStatus = (typeof TASK_STATUSES)[number];

export const PAYMENT_STATUSES = [
  'PENDING',
  'SUCCESS',
  'FAILED',
  'ABANDONED',
  'EXPIRED',
  'MISMATCH',
  'REFUNDED',
] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const PAYOUT_STATUSES = [
  'PENDING',
  'ACCOUNT_LOOKUP_REQUIRED',
  'ACCOUNT_LOOKUP_FAILED',
  'TRANSFER_INITIATED',
  'TRANSFER_SUCCESSFUL',
  'TRANSFER_FAILED',
  'TRANSFER_REVERSED',
  'REQUERY_REQUIRED',
] as const;
export type PayoutStatus = (typeof PAYOUT_STATUSES)[number];

export const FINANCIAL_READINESS_TIERS = [
  'PAYMENTS_ONLY',
  'SAVINGS_READY',
  'INSURANCE_READY',
  'CREDIT_PREQUALIFIED',
  'HIGH_TRUST',
] as const;
export type FinancialReadinessTier = (typeof FINANCIAL_READINESS_TIERS)[number];
