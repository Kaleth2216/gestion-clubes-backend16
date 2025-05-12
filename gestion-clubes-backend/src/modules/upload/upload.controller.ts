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

  @Post('image')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file: { buffer: Buffer }, @Body('key') key: string) {
    await this.uploaderService.upload(file, key);
    return { message: 'Imagen subida correctamente', key };
  }
}
