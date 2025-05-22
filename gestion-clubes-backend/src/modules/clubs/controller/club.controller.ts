/**
 * Este archivo define el controlador para los clubes.
 * Gestiona las rutas HTTP relacionadas con la creación y consulta de clubes.
 * Utiliza el servicio `ClubService` para manejar la lógica del negocio.
 */

import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClubService } from '../services/club.service';
import { CreateClubDto } from '../dto/create-club.dto';

@Controller('clubs')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  // Crear un club utilizando las validaciones definidas en su DTO
  @Post()
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubService.create(createClubDto);
  }

  // Obtener la lista de todos los clubes registrados
  @Get()
  findAll() {
    return this.clubService.findAll();
  }
}
