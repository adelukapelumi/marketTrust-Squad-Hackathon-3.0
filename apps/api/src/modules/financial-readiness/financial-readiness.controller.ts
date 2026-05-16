import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FinancialReadinessService } from './financial-readiness.service';

@ApiTags('Financial Readiness')
@Controller('financial-readiness')
export class FinancialReadinessController {
  constructor(private readonly financialReadinessService: FinancialReadinessService) {}

  @Get(':userId')
  getProfile(@Param('userId') userId: string) {
    return this.financialReadinessService.getProfile(userId);
  }
}
