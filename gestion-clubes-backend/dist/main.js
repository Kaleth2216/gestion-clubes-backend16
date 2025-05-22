"use strict";
/**
 * Punto de entrada principal de la aplicación NestJS.
 * Aquí se inicializa la app, se configura CORS, validaciones globales y el puerto de escucha.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Habilitar CORS para permitir que el front se conecte
    app.enableCors();
    // Configuración global de validación
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT') || 4000;
    await app.listen(port, '0.0.0.0');
    console.log(`Server running on http://192.168.56.1:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map