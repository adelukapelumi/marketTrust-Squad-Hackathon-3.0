import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { SquadService } from '../squad/squad.service';
import { TraderOnboardingDto } from './dto/trader-onboarding.dto';

interface TraderProfile {
  trader_id: string;
  phone_number: string;
  business_name: string;
  business_type: string;
  market_or_location: string;
  preferred_language: string;
  preferred_channel: string;
  static_virtual_account: {
    account_number: string;
    bank_name: string;
    reference: string;
  };
  created_at: string;
}

@Injectable()
export class TradersService {
  private readonly traders = new Map<string, TraderProfile>();

  constructor(private readonly squadService: SquadService) {}

  async onboardTrader(dto: TraderOnboardingDto): Promise<Record<string, unknown>> {
    const traderId = `trd_${randomUUID()}`;

    // MarketTrust non-negotiable:
    // static virtual account is the default trader payment mode.
    const staticVirtualAccount = await this.squadService.createStaticVirtualAccount({
      traderId,
      phone_number: dto.phone_number,
      business_name: dto.business_name,
    });

    const trader: TraderProfile = {
      trader_id: traderId,
      phone_number: dto.phone_number,
      business_name: dto.business_name,
      business_type: dto.business_type,
      market_or_location: dto.market_or_location,
      preferred_language: dto.preferred_language,
      preferred_channel: dto.preferred_channel,
      static_virtual_account: staticVirtualAccount,
      created_at: new Date().toISOString(),
    };

    this.traders.set(traderId, trader);

    return {
      message: 'Trader onboarded successfully.',
      data: trader,
    };
  }
}
