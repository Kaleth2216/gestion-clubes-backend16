import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service'; 
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';

@Injectable()
export class FinancesService {
  constructor(private prisma: PrismaService) {}

  // 🟢 Crea una nueva transacción (ingreso o gasto) en la base de datos
  create(data: CreateTransactionDto) {
    return this.prisma.transaction.create({ data });
  }

  // 🟡 Obtiene todas las transacciones registradas
  findAll() {
    return this.prisma.transaction.findMany();
  }

  // 🔵 Busca una transacción por su ID (UUID)
  findOne(id: string) {
    return this.prisma.transaction.findUnique({ where: { id } });
  }

  // 🟣 Actualiza una transacción específica según su ID (UUID)
  update(id: string, data: UpdateTransactionDto) {
    return this.prisma.transaction.update({
      where: { id },
      data,
    });
  }

  // 🔴 Elimina una transacción de la base de datos usando su ID (UUID)
  remove(id: string) {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
