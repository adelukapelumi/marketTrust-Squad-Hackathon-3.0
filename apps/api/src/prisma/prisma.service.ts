import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit(): Promise<void> {
    // Session A may finish Prisma client wiring in packages/db.
    // Sprint 1 Session B keeps a safe backend boundary without forcing DB readiness.
    this.logger.log('PrismaService initialized (database wiring placeholder for Sprint 1).');
  }

  async onModuleDestroy(): Promise<void> {
    this.logger.log('PrismaService shutting down.');
  }
}
