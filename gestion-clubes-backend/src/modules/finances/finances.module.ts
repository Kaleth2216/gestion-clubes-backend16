/**
 * Este archivo define el módulo de finanzas.
 * Agrupa el controlador y el servicio responsables de manejar las transacciones financieras.
 */

import { Module } from '@nestjs/common';
import { FinancesController } from './controllers/finances.controller';
import { FinancesService } from './services/finances.service';

@Module({
  controllers: [FinancesController],
  providers: [FinancesService],
})
export class FinancesModule {}
