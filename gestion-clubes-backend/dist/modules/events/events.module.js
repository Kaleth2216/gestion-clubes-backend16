"use strict";
/**
 * Este archivo define el módulo de eventos.
 * Agrupa el controlador y el servicio relacionados con la gestión de eventos.
 * Permite a NestJS organizar y encapsular esta funcionalidad.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModule = void 0;
const common_1 = require("@nestjs/common");
const event_controller_1 = require("./controllers/event.controller");
const event_service_1 = require("./services/event.service");
let EventsModule = class EventsModule {
};
exports.EventsModule = EventsModule;
exports.EventsModule = EventsModule = __decorate([
    (0, common_1.Module)({
        controllers: [event_controller_1.EventController],
        providers: [event_service_1.EventService],
    })
], EventsModule);
//# sourceMappingURL=events.module.js.map