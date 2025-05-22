/**
 * Este archivo define el controlador para la carga de imágenes.
 * Expone un endpoint que permite subir una imagen utilizando un interceptor de archivos,
 * y delega la lógica de almacenamiento al `UploaderService`.
 */

import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploaderService } from '../../common/services/uploader.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploaderService: UploaderService) {}

  /**
   * Endpoint POST /upload/image
   * Recibe un archivo de imagen y una clave (key) desde el cuerpo de la petición.
   * Usa un interceptor para procesar el archivo y lo envía al servicio de subida.
   */
  @Post('image')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file: { buffer: Buffer },
    @Body('key') key: string,
  ) {
    await this.uploaderService.upload(file, key);
    return { message: 'Imagen subida correctamente', key };
  }
}
