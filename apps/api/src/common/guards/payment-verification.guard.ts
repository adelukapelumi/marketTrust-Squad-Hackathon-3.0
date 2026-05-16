import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class PaymentVerificationGuard implements CanActivate {
  canActivate(_context: ExecutionContext): boolean {
    // Guard placeholder for Sprint 1:
    // client-side payment success must never mark a payment successful.
    // Only backend verification/webhooks should transition payment state.
    return true;
  }
}
