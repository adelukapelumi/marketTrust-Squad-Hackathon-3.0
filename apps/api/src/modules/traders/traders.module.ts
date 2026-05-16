import { Module } from '@nestjs/common';

import { SquadModule } from '../squad/squad.module';
import { TradersController } from './traders.controller';
import { TradersService } from './traders.service';

@Module({
  imports: [SquadModule],
  controllers: [TradersController],
  providers: [TradersService],
  exports: [TradersService],
})
export class TradersModule {}
