import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TrustService } from './trust.service';

@ApiTags('Trust')
@Controller('trust')
export class TrustController {
  constructor(private readonly trustService: TrustService) {}

  @Get(':userId')
  getTrustSummary(@Param('userId') userId: string) {
    return this.trustService.getTrustSummary(userId);
  }
}
