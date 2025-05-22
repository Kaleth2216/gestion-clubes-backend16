/**
 * Este archivo define el módulo de eventos.
 * Agrupa el controlador y el servicio relacionados con la gestión de eventos.
 * Permite a NestJS organizar y encapsular esta funcionalidad.
 */

import { Module } from '@nestjs/common';
import { EventController } from './controllers/event.controller';
import { EventService } from './services/event.service';

@Module({
  controllers: [EventController],
  providers: [EventService],
})
export class EventsModule {}
