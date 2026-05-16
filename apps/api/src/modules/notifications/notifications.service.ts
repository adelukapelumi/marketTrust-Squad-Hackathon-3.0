import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface NotificationResult {
  delivered: boolean;
  mocked: boolean;
  channel: 'SMS' | 'OTP' | 'TASK_ALERT' | 'PAYMENT_ALERT';
  recipient: string;
  message: string;
}

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private readonly configService: ConfigService) {}

  async sendSms(phoneNumber: string, message: string): Promise<NotificationResult> {
    return this.dispatch('SMS', phoneNumber, message);
  }

  async sendOtp(phoneNumber: string, otpCode: string): Promise<NotificationResult> {
    return this.dispatch('OTP', phoneNumber, `Your MarketTrust OTP is ${otpCode}.`);
  }

  async sendTaskAlert(phoneNumber: string, message: string): Promise<NotificationResult> {
    return this.dispatch('TASK_ALERT', phoneNumber, message);
  }

  async sendPaymentReceivedAlert(phoneNumber: string, amountKobo: number): Promise<NotificationResult> {
    const amountNaira = (amountKobo / 100).toFixed(2);
    return this.dispatch('PAYMENT_ALERT', phoneNumber, `Payment received: N${amountNaira}.`);
  }

  private async dispatch(
    channel: NotificationResult['channel'],
    recipient: string,
    message: string,
  ): Promise<NotificationResult> {
    const termiiApiKey = this.configService.get<string>('notifications.termiiApiKey');
    const termiiSenderId = this.configService.get<string>('notifications.termiiSenderId');

    if (!termiiApiKey || !termiiSenderId) {
      this.logger.log(`[Mock Notification:${channel}] -> ${recipient}: ${message}`);
      return {
        delivered: true,
        mocked: true,
        channel,
        recipient,
        message,
      };
    }

    // Sprint 1 fallback:
    // production provider call can be implemented when provider credentials are available.
    this.logger.log(`[Provider Placeholder:${channel}] sender=${termiiSenderId} recipient=${recipient}`);
    return {
      delivered: false,
      mocked: false,
      channel,
      recipient,
      message,
    };
  }
}
