/**
 * Este archivo define el DTO (Data Transfer Object) para la creación de eventos.
 * Valida los datos requeridos para registrar un nuevo evento asociado a un club.
 */

import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateEventDto {
  // Título del evento (obligatorio)
  @IsString()
  @IsNotEmpty()
  title!: string;

  // Descripción del evento (opcional)
  @IsString()
  @IsOptional()
  description?: string;

  // Ubicación del evento (obligatorio)
  @IsString()
  @IsNotEmpty()
  location!: string;

  // Fecha del evento en formato ISO (obligatorio)
  @IsDateString()
  date!: Date;

  // ID del club al que pertenece el evento (obligatorio)
  @IsString()
  clubId!: string;
}
