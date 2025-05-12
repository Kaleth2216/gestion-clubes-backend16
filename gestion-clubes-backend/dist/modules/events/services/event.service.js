"use strict";
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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let EventService = class EventService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // 🟢 Crea un nuevo evento en la base de datos
    create(data) {
        return this.prisma.event.create({ data });
    }
    // 🟡 Obtiene todos los eventos registrados
    findAll() {
        return this.prisma.event.findMany();
    }
    // 🔵 Busca un evento por su ID (UUID)
    findOne(id) {
        return this.prisma.event.findUnique({ where: { id } });
    }
    // 🟣 Actualiza los datos de un evento según su ID (UUID)
    update(id, data) {
        return this.prisma.event.update({
            where: { id },
            data,
        });
    }
    // 🔴 Elimina un evento usando su ID (UUID)
    remove(id) {
        return this.prisma.event.delete({
            where: { id },
        });
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventService);
//# sourceMappingURL=event.service.js.map