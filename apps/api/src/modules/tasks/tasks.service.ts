import { BadRequestException, Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import type { TaskStatus } from '@markettrust/types';

import { CreateTaskDto } from './dto/create-task.dto';

const ALLOWED_INITIAL_STATUSES: TaskStatus[] = ['DRAFT', 'AWAITING_FUNDING'];

@Injectable()
export class TasksService {
  private readonly tasks = new Map<string, Record<string, unknown>>();

  createTaskDraft(dto: CreateTaskDto) {
    const initialStatus = dto.initial_status ?? 'AWAITING_FUNDING';

    if (!ALLOWED_INITIAL_STATUSES.includes(initialStatus)) {
      throw new BadRequestException('Task can only start in DRAFT or AWAITING_FUNDING status.');
    }

    // MarketTrust rule:
    // workers must only receive FUNDED tasks, so matching is intentionally skipped here.
    // Task funding must happen and be backend-verified before matching starts.
    const task = {
      task_id: `tsk_${randomUUID()}`,
      trader_id: dto.trader_id,
      task_type: dto.task_type,
      task_description: dto.task_description,
      task_location: dto.task_location,
      pay_amount_kobo: dto.pay_amount_kobo,
      preferred_language: dto.preferred_language,
      needed_time: dto.needed_time,
      proof_requirement: dto.proof_requirement,
      dropoff_location: dto.dropoff_location,
      receiver_name: dto.receiver_name,
      receiver_phone: dto.receiver_phone,
      estimated_duration_minutes: dto.estimated_duration_minutes,
      status: initialStatus,
      created_at: new Date().toISOString(),
    };

    this.tasks.set(task.task_id, task);

    return {
      message: 'Task created successfully.',
      data: task,
    };
  }
}
