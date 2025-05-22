/**
 * Este archivo define el DTO para la creación de miembros.
 * Se utiliza para validar los datos al registrar un nuevo miembro en un club,
 * incluyendo información personal, credenciales y rol dentro del club.
 * Los campos `status` y fechas son gestionados automáticamente por Prisma.
 */

import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateMemberDto {
  // Nombre completo del miembro (obligatorio)
  @IsString()
  @IsNotEmpty()
  name!: string;
  
  // Correo electrónico del miembro (obligatorio y con formato válido)
  @IsEmail()
  email!: string;
  
  // Contraseña de acceso (obligatoria)
  @IsString()
  @IsNotEmpty()
  password!: string;
  
  // Rol del miembro dentro del club (opcional, validado según enum Role)
  @IsEnum(Role, { message: 'Role must be one of: PRESIDENT, VICEPRESIDENT, SECRETARY, TREASURER, MEMBER' })
  role?: Role;

  // ID del club al que se asocia el miembro (obligatorio)
  @IsString()
  clubId!: string;

  // El campo status y las fechas son manejadas por los defaults de Prisma.
}
