import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { WorkerOnboardingDto } from './dto/worker-onboarding.dto';
import { WorkersService } from './workers.service';

@ApiTags('Workers')
@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Post('onboard')
  onboardWorker(@Body() dto: WorkerOnboardingDto): Record<string, unknown> {
    return this.workersService.onboardWorker(dto);
  }
}
