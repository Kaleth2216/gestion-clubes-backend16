/**
 * Este archivo define el controlador para los eventos.
 * Gestiona las rutas HTTP para crear, consultar, actualizar y eliminar eventos.
 * También permite filtrar eventos por club mediante un parámetro de consulta (`clubId`).
 */

import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common'; // 👈 Agrega Query
import { EventService } from '../services/event.service';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  // Crear un nuevo evento
  @Post()
  create(@Body() createEventDto: CreateEventDto): Promise<any> {
    return this.eventService.create(createEventDto);
  }

  // Obtener todos los eventos, opcionalmente filtrados por clubId
  @Get()
  findAll(@Query('clubId') clubId?: string) {
    return this.eventService.findAll(clubId); // 👈 Se pasa al servicio
  }

  // Obtener un evento específico por su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  // Actualizar un evento por su ID
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  // Eliminar un evento por su ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
