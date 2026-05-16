import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { NotificationsService } from '../notifications/notifications.service';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';

interface OtpRecord {
  otpCode: string;
  expiresAt: number;
}

@Injectable()
export class AuthService {
  private readonly otpStore = new Map<string, OtpRecord>();

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async requestOtp(dto: RequestOtpDto) {
    const ttlSeconds = 300;
    const otpCode = this.generateOtp();

    this.otpStore.set(dto.phone_number, {
      otpCode,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });

    await this.notificationsService.sendOtp(dto.phone_number, otpCode);

    return {
      message: 'OTP sent successfully.',
      phone_number: dto.phone_number,
      ttl_seconds: ttlSeconds,
    };
  }

  async verifyOtp(dto: VerifyOtpDto) {
    const otpRecord = this.otpStore.get(dto.phone_number);
    const fallbackMockCode = this.configService.get<string>('auth.mockOtpCode', '123456');

    const isValidStoredOtp =
      otpRecord !== undefined && otpRecord.expiresAt > Date.now() && otpRecord.otpCode === dto.otp_code;

    const isValidMockOtp = dto.otp_code === fallbackMockCode;

    if (!isValidStoredOtp && !isValidMockOtp) {
      throw new UnauthorizedException('Invalid or expired OTP code.');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: dto.phone_number,
      role: 'UNVERIFIED',
    });

    this.otpStore.delete(dto.phone_number);

    return {
      access_token: accessToken,
      token_type: 'Bearer',
      expires_in: this.configService.get<string>('auth.jwtExpiresIn', '1d'),
    };
  }

  private generateOtp(): string {
    if (this.configService.get<string>('NODE_ENV') === 'production') {
      return Math.floor(100000 + Math.random() * 900000).toString();
    }

    return this.configService.get<string>('auth.mockOtpCode', '123456');
  }
}
