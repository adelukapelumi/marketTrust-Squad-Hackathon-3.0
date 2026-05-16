import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var __marketTrustPrisma: PrismaClient | undefined;
}

export const prisma =
  global.__marketTrustPrisma ??
  new PrismaClient({
    log: ['error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.__marketTrustPrisma = prisma;
}

export * from '@prisma/client';
