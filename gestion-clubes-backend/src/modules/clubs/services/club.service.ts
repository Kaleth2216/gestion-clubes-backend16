/**
 * Este archivo define el servicio que contiene la lógica para gestionar los clubes.
 * Interactúa con la base de datos a través del PrismaService.
 */

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateClubDto } from '../dto/create-club.dto';

@Injectable()
export class ClubService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear un club en la base de datos usando los datos del DTO
  async create(createClubDto: CreateClubDto) {
    return this.prisma.club.create({
      data: createClubDto,
    });
  }

  // Obtener todos los clubes registrados en la base de datos
  async findAll() {
    return this.prisma.club.findMany();
  }
}
