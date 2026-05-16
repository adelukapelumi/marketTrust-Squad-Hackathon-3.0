import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { WorkerOnboardingDto } from './dto/worker-onboarding.dto';

interface WorkerProfile {
  worker_id: string;
  phone_number: string;
  full_name: string;
  skills: string[];
  base_location: string;
  preferred_language: string;
  preferred_channel: string;
  created_at: string;
}

@Injectable()
export class WorkersService {
  private readonly workers = new Map<string, WorkerProfile>();

  onboardWorker(dto: WorkerOnboardingDto): Record<string, unknown> {
    const worker: WorkerProfile = {
      worker_id: `wrk_${randomUUID()}`,
      phone_number: dto.phone_number,
      full_name: dto.full_name,
      skills: dto.skills,
      base_location: dto.base_location,
      preferred_language: dto.preferred_language,
      preferred_channel: dto.preferred_channel,
      created_at: new Date().toISOString(),
    };

    this.workers.set(worker.worker_id, worker);

    return {
      message: 'Worker onboarded successfully.',
      data: worker,
    };
  }
}
