/**
 * Este archivo define el módulo principal de la aplicación (`AppModule`).
 * Importa y configura todos los módulos funcionales del sistema, como clubes, miembros, eventos,
 * finanzas, subida de archivos y la conexión con la base de datos (Prisma).
 * También configura el uso global de variables de entorno con `ConfigModule`.
 */

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './modules/members/members.module';
import { EventsModule } from './modules/events/events.module';
import { FinancesModule } from './modules/finances/finances.module';
import { UploadModule } from './modules/upload/upload.module';
import { ClubsModule } from './modules/clubs/clubs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClubsModule,
    PrismaModule,
    MembersModule,
    EventsModule,
    FinancesModule,
    UploadModule
  ],
})
export class AppModule {}
