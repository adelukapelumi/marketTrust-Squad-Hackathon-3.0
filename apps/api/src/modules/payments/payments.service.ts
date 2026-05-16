import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  getCriticalRules() {
    return {
      rules: [
        'Client-side payment success must never mark payment successful.',
        'Payment verification must happen server-side via Squad verification/webhook events.',
        'Webhook handling must be idempotent and raw payloads should be stored.',
      ],
    };
  }
}
