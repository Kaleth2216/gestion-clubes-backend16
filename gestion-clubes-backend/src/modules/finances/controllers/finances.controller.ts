/**
 * Este archivo define el controlador para las finanzas.
 * Gestiona las rutas HTTP para crear, consultar, actualizar y eliminar transacciones (ingresos/gastos).
 * También permite filtrar transacciones por club mediante un parámetro de consulta (`clubId`).
 */

import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { FinancesService } from '../services/finances.service';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';

@Controller('finances')
export class FinancesController {
  constructor(private readonly financesService: FinancesService) {}

  // 🟢 Crea una nueva transacción (ingreso o gasto) en la base de datos
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.financesService.create(createTransactionDto);
  }

  // 🟡 Obtiene todas las transacciones registradas
  @Get()
findAll(@Query('clubId') clubId?: string) {
  return this.financesService.findAll(clubId); // 👈 pasa clubId al servicio
}

  // 🔵 Busca una transacción por su ID (UUID)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financesService.findOne(id); 
  }

  // 🟣 Actualiza una transacción específica según su ID (UUID)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.financesService.update(id, updateTransactionDto); 
  }

  // 🔴 Elimina una transacción usando su ID (UUID)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financesService.remove(id);
  }
}
