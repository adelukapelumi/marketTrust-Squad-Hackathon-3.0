import { Injectable } from '@nestjs/common';
import type { FinancialReadinessTier } from '@markettrust/types';

@Injectable()
export class FinancialReadinessService {
  getProfile(userId: string) {
    const tier: FinancialReadinessTier = 'PAYMENTS_ONLY';

    return {
      user_id: userId,
      readiness_tier: tier,
      score: 42,
      // Financial readiness is a behavioural readiness tier, not instant loan approval.
      note: 'This is a readiness signal, not automatic loan approval.',
      explainers: [
        'Verified payment behaviour captured.',
        'More funded and completed tasks are needed for higher readiness tiers.',
      ],
    };
  }
}
