import { Injectable, NotImplementedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SquadService {
  constructor(private readonly configService: ConfigService) {}

  async createStaticVirtualAccount(payload: Record<string, unknown>) {
    return this.withMockFallback('createStaticVirtualAccount', {
      account_number: '1099990001',
      bank_name: 'Mock Squad Bank',
      reference: `mva_${Date.now()}`,
      payload,
    });
  }

  async initiateTaskFundingPayment(payload: Record<string, unknown>) {
    return this.withMockFallback('initiateTaskFundingPayment', {
      payment_link: 'https://mock.squad/pay/task-funding',
      reference: `mtf_${Date.now()}`,
      payload,
    });
  }

  async verifyPayment(payload: Record<string, unknown>) {
    // MarketTrust rule: only server-side verification can mark payment as successful.
    return this.withMockFallback('verifyPayment', {
      verified: true,
      status: 'SUCCESS',
      reference: payload.reference ?? `pmt_${Date.now()}`,
    });
  }

  async handlePaymentWebhook(payload: Record<string, unknown>) {
    // Webhook processing must be idempotent and store raw events.
    return this.withMockFallback('handlePaymentWebhook', {
      processed: true,
      event_id: payload.event_id ?? `evt_${Date.now()}`,
    });
  }

  async lookupBankAccount(payload: Record<string, unknown>) {
    return this.withMockFallback('lookupBankAccount', {
      valid: true,
      account_name: 'Mock Worker Account',
      payload,
    });
  }

  async initiateTransfer(payload: Record<string, unknown>) {
    return this.withMockFallback('initiateTransfer', {
      transfer_reference: `trf_${Date.now()}`,
      status: 'TRANSFER_INITIATED',
      payload,
    });
  }

  async requeryTransfer(payload: Record<string, unknown>) {
    return this.withMockFallback('requeryTransfer', {
      transfer_reference: payload.transfer_reference ?? `trf_${Date.now()}`,
      status: 'TRANSFER_SUCCESSFUL',
    });
  }

  async validateWebhookSignature(payload: Record<string, unknown>) {
    return this.withMockFallback('validateWebhookSignature', {
      valid: true,
      payload,
    });
  }

  private withMockFallback<T>(methodName: string, mockPayload: T): T {
    const mockEnabled = this.configService.get<boolean>('squad.mock', true);

    if (!mockEnabled) {
      throw new NotImplementedException(
        `${methodName} is not implemented for real Squad integration yet. Set MOCK_SQUAD=true for safe Sprint 1 mocks.`,
      );
    }

    return mockPayload;
  }
}
