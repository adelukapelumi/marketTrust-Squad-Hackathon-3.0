import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsMobilePhone, IsOptional, IsString, Length } from 'class-validator';

export class UssdSessionDto {
  @ApiProperty({ example: 'ussd-session-123' })
  @IsString()
  @Length(2, 120)
  session_id!: string;

  @ApiProperty({ example: '*345#' })
  @IsString()
  @Length(2, 20)
  service_code!: string;

  @ApiProperty({ example: '+2348012345678' })
  @IsString()
  @IsMobilePhone('en-NG')
  phone_number!: string;

  @ApiPropertyOptional({ example: '1' })
  @IsOptional()
  @IsString()
  text?: string;
}
