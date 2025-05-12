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
exports.FinancesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let FinancesService = class FinancesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // 🟢 Crea una nueva transacción (ingreso o gasto) en la base de datos
    create(data) {
        return this.prisma.transaction.create({ data });
    }
    // 🟡 Obtiene todas las transacciones registradas
    findAll() {
        return this.prisma.transaction.findMany();
    }
    // 🔵 Busca una transacción por su ID (UUID)
    findOne(id) {
        return this.prisma.transaction.findUnique({ where: { id } });
    }
    // 🟣 Actualiza una transacción específica según su ID (UUID)
    update(id, data) {
        return this.prisma.transaction.update({
            where: { id },
            data,
        });
    }
    // 🔴 Elimina una transacción de la base de datos usando su ID (UUID)
    remove(id) {
        return this.prisma.transaction.delete({
            where: { id },
        });
    }
};
exports.FinancesService = FinancesService;
exports.FinancesService = FinancesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FinancesService);
//# sourceMappingURL=finances.service.js.map