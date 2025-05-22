/**
 * Este archivo define el módulo de carga de archivos.
 * Registra el controlador y el servicio necesarios para subir imágenes,
 * y exporta el servicio `UploaderService` para que pueda ser usado en otros módulos.
 */

import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploaderService } from '../../common/services/uploader.service';

@Module({
  controllers: [UploadController],
  providers: [UploaderService],
  exports: [UploaderService],
})
export class UploadModule {}
