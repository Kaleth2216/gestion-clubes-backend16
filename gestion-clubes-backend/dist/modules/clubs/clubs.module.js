"use strict";
/**
 * Este archivo define el módulo de clubes.
 * Registra el controlador, el servicio y la dependencia al módulo de Prisma para acceso a base de datos.
 * Permite a NestJS gestionar todo lo relacionado con los clubes de forma encapsulada.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubsModule = void 0;
const common_1 = require("@nestjs/common");
const club_controller_1 = require("./controller/club.controller");
const club_service_1 = require("./services/club.service");
const prisma_module_1 = require("../../prisma/prisma.module");
let ClubsModule = class ClubsModule {
};
exports.ClubsModule = ClubsModule;
exports.ClubsModule = ClubsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [club_controller_1.ClubController],
        providers: [club_service_1.ClubService],
    })
], ClubsModule);
//# sourceMappingURL=clubs.module.js.map