/**
 * Este archivo define el módulo de clubes.
 * Registra el controlador, el servicio y la dependencia al módulo de Prisma para acceso a base de datos.
 * Permite a NestJS gestionar todo lo relacionado con los clubes de forma encapsulada.
 */

import { Module } from '@nestjs/common';
import { ClubController } from './controller/club.controller';
import { ClubService } from './services/club.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ClubController],
  providers: [ClubService],
})
export class ClubsModule {}
