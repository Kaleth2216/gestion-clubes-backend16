import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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
  findAll() {
    return this.financesService.findAll();
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
