import type { FinancialReadinessTier, TaskStatus } from './enums';

export interface TraderOnboardingInput {
  phoneNumber: string;
  businessName: string;
  businessType: string;
  marketOrLocation: string;
  preferredLanguage: string;
  preferredChannel: 'MOBILE_APP' | 'USSD' | 'SMS' | 'WHATSAPP';
  fullName?: string;
  email?: string;
  address?: string;
  dateOfBirth?: string;
  bvn?: string;
}

export interface WorkerOnboardingInput {
  phoneNumber: string;
  fullName: string;
  skills: string[];
  baseLocation: string;
  availabilityArea?: string;
  preferredLanguage: string;
  preferredChannel: 'MOBILE_APP' | 'WHATSAPP' | 'SMS';
  bankAccountNumber?: string;
  bankCode?: string;
}

export interface CreateTaskInput {
  traderId: string;
  taskType: string;
  taskDescription: string;
  taskLocation: string;
  payAmountKobo: number;
  preferredLanguage: string;
  neededTime: string;
  proofRequirement: string;
  dropoffLocation?: string;
  receiverName?: string;
  receiverPhone?: string;
  estimatedDurationMinutes?: number;
}

export interface FundTaskInput {
  taskId: string;
  traderId: string;
  amountKobo: number;
  paymentReference: string;
}

export interface MatchResult {
  workerId: string;
  matchScore: number;
  matchReason: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface VerificationSignal {
  taskId: string;
  signalType:
    | 'START_CODE'
    | 'COMPLETION_CODE'
    | 'TRADER_CONFIRMATION'
    | 'PHOTO_PROOF'
    | 'GPS_CHECKIN'
    | 'TIME_SIGNAL'
    | 'RECEIVER_CODE';
  signalValue: string;
  capturedAt: string;
}

export interface FinancialReadinessSummary {
  userId: string;
  tier: FinancialReadinessTier;
  score: number;
  currentTaskStatus?: TaskStatus;
  explainers: string[];
  updatedAt: string;
}
