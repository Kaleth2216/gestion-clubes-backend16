"use strict";
/**
 * Este archivo define el servicio que contiene la lógica para manejar los eventos.
 * Se encarga de crear, consultar, actualizar y eliminar eventos en la base de datos usando Prisma.
 * También permite filtrar eventos por club.
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
        const { clubId } = data, eventData = __rest(data, ["clubId"]);
        return this.prisma.event.create({
            data: Object.assign(Object.assign({}, eventData), { club: {
                    connect: { id: clubId }, // 👈 Enlaza el evento al club correspondiente
                } }),
        });
    }
    // 🟡 Obtiene todos los eventos, o solo los del club si se pasa clubId
    findAll(clubId) {
        // Si se pasa un clubId, se filtra por ese club
        if (clubId) {
            return this.prisma.event.findMany({
                where: { clubId },
                orderBy: { date: 'asc' }, // ✅ Opcional: orden por fecha
            });
        }
        // Si no hay clubId, se devuelven todos los eventos
        return this.prisma.event.findMany({
            orderBy: { date: 'asc' },
        });
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