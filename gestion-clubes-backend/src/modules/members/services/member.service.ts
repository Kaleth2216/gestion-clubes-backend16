import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  // 🟢 Crea un nuevo miembro en la base de datos con los datos validados desde el DTO
  create(data: CreateMemberDto) {
    return this.prisma.member.create({ data });
  }

  // 🟡 Obtiene todos los miembros registrados en la base de datos
  findAll() {
    return this.prisma.member.findMany();
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
