import { Module } from '@nestjs/common';

import { FinancialReadinessController } from './financial-readiness.controller';
import { FinancialReadinessService } from './financial-readiness.service';

@Module({
  controllers: [FinancialReadinessController],
  providers: [FinancialReadinessService],
  exports: [FinancialReadinessService],
})
export class FinancialReadinessModule {}
