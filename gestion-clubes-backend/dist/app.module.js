"use strict";
/**
 * Este archivo define el módulo principal de la aplicación (`AppModule`).
 * Importa y configura todos los módulos funcionales del sistema, como clubes, miembros, eventos,
 * finanzas, subida de archivos y la conexión con la base de datos (Prisma).
 * También configura el uso global de variables de entorno con `ConfigModule`.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const members_module_1 = require("./modules/members/members.module");
const events_module_1 = require("./modules/events/events.module");
const finances_module_1 = require("./modules/finances/finances.module");
const upload_module_1 = require("./modules/upload/upload.module");
const clubs_module_1 = require("./modules/clubs/clubs.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            clubs_module_1.ClubsModule,
            prisma_module_1.PrismaModule,
            members_module_1.MembersModule,
            events_module_1.EventsModule,
            finances_module_1.FinancesModule,
            upload_module_1.UploadModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map