/**
 * Este archivo define el servicio para gestionar miembros.
 * Incluye la lógica para crear, consultar, actualizar y eliminar miembros en la base de datos.
 * También permite filtrar miembros por club usando su ID.
 */

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  // 🟢 Crea un nuevo miembro en la base de datos con los datos validados desde el DTO
  create(data: CreateMemberDto) {
    const { clubId, ...memberData } = data;

    return this.prisma.member.create({
      data: {
        ...memberData,
        club: {
          connect: { id: clubId },
        },
      },
    });
  }

  // 🟡 Obtiene todos los miembros registrados en la base de datos
  findAll() {
    return this.prisma.member.findMany();
  }

  // 🟡 Obtiene los miembros de un club específico
  async findByClub(clubId: string) {
    return this.prisma.member.findMany({
      where: { clubId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  }

  // 🔵 Busca un miembro por su ID (tipo UUID)
  findOne(id: string) {
    return this.prisma.member.findUnique({ where: { id } });
  }

  // 🟣 Actualiza los datos de un miembro específico según su ID
  update(id: string, data: UpdateMemberDto) {
    return this.prisma.member.update({
      where: { id },
      data,
    });
  }

  // 🔴 Elimina un miembro de la base de datos usando su ID
  remove(id: string) {
    return this.prisma.member.delete({
      where: { id },
    });
  }
}
