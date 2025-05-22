"use strict";
/**
 * Este archivo define el controlador para los clubes.
 * Gestiona las rutas HTTP relacionadas con la creación y consulta de clubes.
 * Utiliza el servicio `ClubService` para manejar la lógica del negocio.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubController = void 0;
const common_1 = require("@nestjs/common");
const club_service_1 = require("../services/club.service");
const create_club_dto_1 = require("../dto/create-club.dto");
let ClubController = class ClubController {
    constructor(clubService) {
        this.clubService = clubService;
    }
    // Crear un club utilizando las validaciones definidas en su DTO
    create(createClubDto) {
        return this.clubService.create(createClubDto);
    }
    // Obtener la lista de todos los clubes registrados
    findAll() {
        return this.clubService.findAll();
    }
};
exports.ClubController = ClubController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_club_dto_1.CreateClubDto]),
    __metadata("design:returntype", void 0)
], ClubController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClubController.prototype, "findAll", null);
exports.ClubController = ClubController = __decorate([
    (0, common_1.Controller)('clubs'),
    __metadata("design:paramtypes", [club_service_1.ClubService])
], ClubController);
//# sourceMappingURL=club.controller.js.map