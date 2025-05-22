
/**
 * Punto de entrada principal de la aplicación NestJS.
 * Aquí se inicializa la app, se configura CORS, validaciones globales y el puerto de escucha.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir que el front se conecte
  app.enableCors();
  
  // Configuración global de validación
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 4000;
  await app.listen(port, '0.0.0.0');
  console.log(`Server running on http://192.168.56.1:${port}`);

}
bootstrap();
