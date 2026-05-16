const toBoolean = (value: string | undefined, fallback: boolean): boolean => {
  if (value === undefined) {
    return fallback;
  }

  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
};

export default () => ({
  app: {
    port: Number(process.env.PORT ?? 4000),
    name: process.env.APP_NAME ?? 'markettrust-api',
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET ?? 'markettrust-dev-secret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '1d',
    mockOtpCode: process.env.MOCK_OTP_CODE ?? '123456',
  },
  squad: {
    mock: toBoolean(process.env.MOCK_SQUAD, true),
  },
  notifications: {
    termiiApiKey: process.env.TERMII_API_KEY,
    termiiSenderId: process.env.TERMII_SENDER_ID,
  },
});
