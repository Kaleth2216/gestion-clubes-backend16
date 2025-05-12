import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MemberService } from '../services/member.service';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  // 🟢 Crea un nuevo miembro con los datos enviados en el cuerpo de la petición
  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.memberService.create(createMemberDto);
  }

  // 🟡 Retorna todos los miembros registrados
  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  // 🔵 Busca un miembro específico por su ID (UUID)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne(id); 
  }

  // 🟣 Actualiza los datos de un miembro por su ID (UUID)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.memberService.update(id, updateMemberDto); 
  }

  // 🔴 Elimina un miembro según su ID (UUID)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberService.remove(id); 
  }
}
