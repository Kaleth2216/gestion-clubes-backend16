import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  // 🟢 Crea un nuevo evento en la base de datos
  create(data: CreateEventDto) {
    return this.prisma.event.create({ data });
  }

  // 🟡 Obtiene todos los eventos registrados
  findAll() {
    return this.prisma.event.findMany();
  }

  // 🔵 Busca un evento por su ID (UUID)
  findOne(id: string) {
    return this.prisma.event.findUnique({ where: { id } });
  }

  // 🟣 Actualiza los datos de un evento según su ID (UUID)
  update(id: string, data: UpdateEventDto) {
    return this.prisma.event.update({
      where: { id },
      data,
    });
  }

  // 🔴 Elimina un evento usando su ID (UUID)
  remove(id: string) {
    return this.prisma.event.delete({
      where: { id },
    });
  }
}
