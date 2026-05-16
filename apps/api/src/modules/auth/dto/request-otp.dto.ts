import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsMobilePhone, IsOptional, IsString } from 'class-validator';

const AUTH_CHANNELS = ['SMS', 'WHATSAPP'] as const;

export class RequestOtpDto {
  @ApiProperty({ example: '+2348012345678' })
  @IsString()
  @IsMobilePhone('en-NG')
  phone_number!: string;

  @ApiProperty({ enum: AUTH_CHANNELS, required: false, example: 'SMS' })
  @IsOptional()
  @IsString()
  @IsIn(AUTH_CHANNELS)
  channel?: (typeof AUTH_CHANNELS)[number];
}
