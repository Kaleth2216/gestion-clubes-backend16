/**
 * Este archivo define el DTO (Data Transfer Object) para la creación de transacciones financieras.
 * Valida los datos necesarios para registrar ingresos o gastos asociados a un club.
 */

import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TransactionType } from '@prisma/client';

export class CreateTransactionDto {
  // Tipo de transacción: INCOME o EXPENSE (obligatorio)
  @IsEnum(TransactionType, { message: 'Type must be INCOME or EXPENSE' })
  type!: TransactionType;
  
  // Monto de la transacción (obligatorio)
  @IsNumber()
  @IsNotEmpty()
  amount!: number;
  
  // Descripción opcional de la transacción
  @IsString()
  @IsOptional()
  description?: string;

  // ID del club al que pertenece la transacción (obligatorio)
  @IsString()
  @IsNotEmpty()
  clubId!: string;
}
