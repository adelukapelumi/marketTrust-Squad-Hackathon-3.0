import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsMobilePhone, IsString, Length } from 'class-validator';

const TRADER_CHANNELS = ['MOBILE_APP', 'USSD', 'SMS', 'WHATSAPP'] as const;

export class TraderOnboardingDto {
  @ApiProperty({ example: '+2348012345678' })
  @IsString()
  @IsMobilePhone('en-NG')
  phone_number!: string;

  @ApiProperty({ example: 'Amina Fresh Foods' })
  @IsString()
  @Length(2, 120)
  business_name!: string;

  @ApiProperty({ example: 'Groceries' })
  @IsString()
  @Length(2, 80)
  business_type!: string;

  @ApiProperty({ example: 'Yaba Market, Lagos' })
  @IsString()
  @Length(2, 120)
  market_or_location!: string;

  @ApiProperty({ example: 'en' })
  @IsString()
  @Length(2, 20)
  preferred_language!: string;

  @ApiProperty({ enum: TRADER_CHANNELS, example: 'USSD' })
  @IsString()
  @IsIn(TRADER_CHANNELS)
  preferred_channel!: (typeof TRADER_CHANNELS)[number];
}
