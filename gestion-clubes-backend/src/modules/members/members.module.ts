/**
 * Este archivo define el módulo de miembros.
 * Agrupa el controlador y el servicio encargados de gestionar los miembros de los clubes.
 */
import { Module } from '@nestjs/common';
import { MemberController } from './controllers/member.controller';
import { MemberService } from './services/member.service';


@Module({
  controllers: [MemberController],
  providers: [MemberService],
})
export class MembersModule {}
