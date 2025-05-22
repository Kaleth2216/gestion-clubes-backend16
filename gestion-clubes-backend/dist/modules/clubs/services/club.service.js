"use strict";
/**
 * Este archivo define el servicio que contiene la lógica para gestionar los clubes.
 * Interactúa con la base de datos a través del PrismaService.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let ClubService = class ClubService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // Crear un club en la base de datos usando los datos del DTO
    async create(createClubDto) {
        return this.prisma.club.create({
            data: createClubDto,
        });
    }
    // Obtener todos los clubes registrados en la base de datos
    async findAll() {
        return this.prisma.club.findMany();
    }
};
exports.ClubService = ClubService;
exports.ClubService = ClubService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClubService);
//# sourceMappingURL=club.service.js.map