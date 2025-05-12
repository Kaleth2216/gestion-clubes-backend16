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
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
