/**
 * Este archivo define el DTO (Data Transfer Object) para la creación de un club.
 * Se utiliza para validar los datos recibidos al registrar un nuevo club.
 */

import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClubDto {
  // Nombre del club (obligatorio, tipo string)
  @IsString()
  @IsNotEmpty()
  name!: string;

  // Fundador del club (obligatorio, tipo string)
  @IsString()
  @IsNotEmpty()
  founder!: string;

  // Descripción del club (obligatorio, tipo string)
  @IsString()
  @IsNotEmpty()
  description!: string;

  // Año de fundación del club (opcional, tipo string)
  @IsOptional()
  @IsString()
  foundedYear?: string;
}
