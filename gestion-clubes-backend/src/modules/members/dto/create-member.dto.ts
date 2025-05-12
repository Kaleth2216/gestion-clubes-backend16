import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
  
  @IsEmail()
  email!: string;
  
  @IsString()
  @IsNotEmpty()
  password!: string;
  
  @IsEnum(Role, { message: 'Role must be one of: PRESIDENT, VICEPRESIDENT, SECRETARY, TREASURER, MEMBER' })
  role?: Role;
  
  // El campo status y las fechas son manejadas por los defaults de Prisma.
}
