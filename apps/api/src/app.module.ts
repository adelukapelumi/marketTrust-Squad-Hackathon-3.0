import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appConfig from './config/app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { FinancialReadinessModule } from './modules/financial-readiness/financial-readiness.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { SquadModule } from './modules/squad/squad.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { TradersModule } from './modules/traders/traders.module';
import { TrustModule } from './modules/trust/trust.module';
import { UsersModule } from './modules/users/users.module';
import { WorkersModule } from './modules/workers/workers.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    TradersModule,
    WorkersModule,
    TasksModule,
    SquadModule,
    PaymentsModule,
    NotificationsModule,
    ChannelsModule,
    TrustModule,
    FinancialReadinessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
