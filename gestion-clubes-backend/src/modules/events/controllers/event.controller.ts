import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EventService } from '../services/event.service';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  // 🟢 Crea un nuevo evento con los datos enviados en el cuerpo del request
  @Post()
  create(@Body() createEventDto: CreateEventDto): Promise<any> {
    return this.eventService.create(createEventDto);
  }

  // 🟡 Obtiene todos los eventos registrados
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  // 🔵 Busca un evento específico por su ID (UUID)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id); 
  }

  // 🟣 Actualiza un evento específico según su ID (UUID)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto); 
  }

  // 🔴 Elimina un evento usando su ID (UUID)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
