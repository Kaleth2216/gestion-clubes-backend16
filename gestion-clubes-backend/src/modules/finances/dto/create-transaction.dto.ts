import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TransactionType } from '@prisma/client';

export class CreateTransactionDto {
  @IsEnum(TransactionType, { message: 'Type must be INCOME or EXPENSE' })
  type!: TransactionType;
  
  @IsNumber()
  @IsNotEmpty()
  amount!: number;
  
  @IsString()
  @IsOptional()
  description?: string;
}
