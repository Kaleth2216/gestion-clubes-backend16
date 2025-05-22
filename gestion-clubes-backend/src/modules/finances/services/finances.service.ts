/**
 * Este archivo define el servicio de finanzas.
 * Contiene la lógica para crear, obtener, actualizar y eliminar transacciones (ingresos/gastos) en la base de datos.
 */

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';

@Injectable()
export class FinancesService {
  constructor(private prisma: PrismaService) {}

  // 🟢 Crea una nueva transacción (ingreso o gasto) en la base de datos
  create(data: CreateTransactionDto) {
    const { clubId, ...transactionData } = data;

    return this.prisma.transaction.create({
      data: {
        ...transactionData,
        club: {
          connect: { id: clubId },
        },
      },
    });
  }

  // 🟡 Obtiene todas las transacciones registradas
  findAll(clubId?: string) {
  if (clubId) {
    return this.prisma.transaction.findMany({
      where: { clubId },
      orderBy: { createdAt: 'desc' },
    });
  }

  return this.prisma.transaction.findMany({
    orderBy: { createdAt: 'desc' },
  });
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
