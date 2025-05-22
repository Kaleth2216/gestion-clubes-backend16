/**
 * Este archivo define el servicio que contiene la lógica para manejar los eventos.
 * Se encarga de crear, consultar, actualizar y eliminar eventos en la base de datos usando Prisma.
 * También permite filtrar eventos por club.
 */

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  // 🟢 Crea un nuevo evento en la base de datos
  create(data: CreateEventDto) {
    const { clubId, ...eventData } = data;

    return this.prisma.event.create({
      data: {
        ...eventData,
        club: {
          connect: { id: clubId }, // 👈 Enlaza el evento al club correspondiente
        },
      },
    });
  }

  // 🟡 Obtiene todos los eventos, o solo los del club si se pasa clubId
  findAll(clubId?: string) {
    // Si se pasa un clubId, se filtra por ese club
    if (clubId) {
      return this.prisma.event.findMany({
        where: { clubId },
        orderBy: { date: 'asc' }, // ✅ Opcional: orden por fecha
      });
    }

    // Si no hay clubId, se devuelven todos los eventos
    return this.prisma.event.findMany({
      orderBy: { date: 'asc' },
    });
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
