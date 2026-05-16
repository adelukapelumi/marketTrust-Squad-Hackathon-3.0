import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TraderOnboardingDto } from './dto/trader-onboarding.dto';
import { TradersService } from './traders.service';

@ApiTags('Traders')
@Controller('traders')
export class TradersController {
  constructor(private readonly tradersService: TradersService) {}

  @Post('onboard')
  onboardTrader(@Body() dto: TraderOnboardingDto): Promise<Record<string, unknown>> {
    return this.tradersService.onboardTrader(dto);
  }
}
