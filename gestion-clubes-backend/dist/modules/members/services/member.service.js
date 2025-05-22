"use strict";
/**
 * Este archivo define el servicio para gestionar miembros.
 * Incluye la lógica para crear, consultar, actualizar y eliminar miembros en la base de datos.
 * También permite filtrar miembros por club usando su ID.
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
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let MemberService = class MemberService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // 🟢 Crea un nuevo miembro en la base de datos con los datos validados desde el DTO
    create(data) {
        const { clubId } = data, memberData = __rest(data, ["clubId"]);
        return this.prisma.member.create({
            data: Object.assign(Object.assign({}, memberData), { club: {
                    connect: { id: clubId },
                } }),
        });
    }
    // 🟡 Obtiene todos los miembros registrados en la base de datos
    findAll() {
        return this.prisma.member.findMany();
    }
    // 🟡 Obtiene los miembros de un club específico
    async findByClub(clubId) {
        return this.prisma.member.findMany({
            where: { clubId },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
    }
    // 🔵 Busca un miembro por su ID (tipo UUID)
    findOne(id) {
        return this.prisma.member.findUnique({ where: { id } });
    }
    // 🟣 Actualiza los datos de un miembro específico según su ID
    update(id, data) {
        return this.prisma.member.update({
            where: { id },
            data,
        });
    }
    // 🔴 Elimina un miembro de la base de datos usando su ID
    remove(id) {
        return this.prisma.member.delete({
            where: { id },
        });
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MemberService);
//# sourceMappingURL=member.service.js.map