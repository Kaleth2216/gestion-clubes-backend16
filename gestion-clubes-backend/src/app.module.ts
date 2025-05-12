import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './modules/members/members.module';
import { EventsModule } from './modules/events/events.module';
import { FinancesModule } from './modules/finances/finances.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    MembersModule,
    EventsModule,
    FinancesModule,
    UploadModule
  ],
})
export class AppModule {}
