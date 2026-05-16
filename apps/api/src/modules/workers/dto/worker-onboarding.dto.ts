import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsIn,
  IsMobilePhone,
  IsString,
  Length,
} from 'class-validator';

const WORKER_CHANNELS = ['MOBILE_APP', 'WHATSAPP', 'SMS'] as const;

export class WorkerOnboardingDto {
  @ApiProperty({ example: '+2348098765432' })
  @IsString()
  @IsMobilePhone('en-NG')
  phone_number!: string;

  @ApiProperty({ example: 'Ibrahim Musa' })
  @IsString()
  @Length(2, 120)
  full_name!: string;

  @ApiProperty({ example: ['delivery', 'inventory'] })
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  skills!: string[];

  @ApiProperty({ example: 'Surulere, Lagos' })
  @IsString()
  @Length(2, 120)
  base_location!: string;

  @ApiProperty({ example: 'en' })
  @IsString()
  @Length(2, 20)
  preferred_language!: string;

  @ApiProperty({ enum: WORKER_CHANNELS, example: 'WHATSAPP' })
  @IsString()
  @IsIn(WORKER_CHANNELS)
  preferred_channel!: (typeof WORKER_CHANNELS)[number];
}
