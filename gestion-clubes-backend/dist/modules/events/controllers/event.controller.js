"use strict";
/**
 * Este archivo define el controlador para los eventos.
 * Gestiona las rutas HTTP para crear, consultar, actualizar y eliminar eventos.
 * También permite filtrar eventos por club mediante un parámetro de consulta (`clubId`).
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
exports.EventController = void 0;
const common_1 = require("@nestjs/common"); // 👈 Agrega Query
const event_service_1 = require("../services/event.service");
const create_event_dto_1 = require("../dto/create-event.dto");
const update_event_dto_1 = require("../dto/update-event.dto");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    // Crear un nuevo evento
    create(createEventDto) {
        return this.eventService.create(createEventDto);
    }
    // Obtener todos los eventos, opcionalmente filtrados por clubId
    findAll(clubId) {
        return this.eventService.findAll(clubId); // 👈 Se pasa al servicio
    }
    // Obtener un evento específico por su ID
    findOne(id) {
        return this.eventService.findOne(id);
    }
    // Actualizar un evento por su ID
    update(id, updateEventDto) {
        return this.eventService.update(id, updateEventDto);
    }
    // Eliminar un evento por su ID
    remove(id) {
        return this.eventService.remove(id);
    }
};
exports.EventController = EventController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('clubId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_dto_1.UpdateEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "remove", null);
exports.EventController = EventController = __decorate([
    (0, common_1.Controller)('events'),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
//# sourceMappingURL=event.controller.js.map