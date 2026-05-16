import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsInt, IsMobilePhone, IsOptional, IsString, Length, Min } from 'class-validator';
import type { TaskStatus } from '@markettrust/types';

const INITIAL_TASK_STATUSES: TaskStatus[] = ['DRAFT', 'AWAITING_FUNDING'];

export class CreateTaskDto {
  @ApiProperty({ example: 'trd_1234' })
  @IsString()
  trader_id!: string;

  @ApiProperty({ example: 'DELIVERY' })
  @IsString()
  @Length(2, 40)
  task_type!: string;

  @ApiProperty({ example: 'Deliver rice bags to nearby customer' })
  @IsString()
  @Length(5, 300)
  task_description!: string;

  @ApiProperty({ example: 'Yaba, Lagos' })
  @IsString()
  @Length(2, 120)
  task_location!: string;

  @ApiProperty({ example: 150000, description: 'Task pay amount in kobo.' })
  @IsInt()
  @Min(1)
  pay_amount_kobo!: number;

  @ApiProperty({ example: 'en' })
  @IsString()
  @Length(2, 20)
  preferred_language!: string;

  @ApiProperty({ example: '2026-05-16T14:00:00+01:00' })
  @IsString()
  needed_time!: string;

  @ApiProperty({ example: 'PHOTO_PROOF' })
  @IsString()
  proof_requirement!: string;

  @ApiPropertyOptional({ example: 'Akoka, Lagos' })
  @IsOptional()
  @IsString()
  dropoff_location?: string;

  @ApiPropertyOptional({ example: 'Mrs. Adebayo' })
  @IsOptional()
  @IsString()
  receiver_name?: string;

  @ApiPropertyOptional({ example: '+2348011122233' })
  @IsOptional()
  @IsString()
  @IsMobilePhone('en-NG')
  receiver_phone?: string;

  @ApiPropertyOptional({ example: 90 })
  @IsOptional()
  @IsInt()
  @Min(1)
  estimated_duration_minutes?: number;

  @ApiPropertyOptional({ enum: INITIAL_TASK_STATUSES, example: 'AWAITING_FUNDING' })
  @IsOptional()
  @IsString()
  @IsIn(INITIAL_TASK_STATUSES)
  initial_status?: TaskStatus;
}
