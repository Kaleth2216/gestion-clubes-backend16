import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploaderService } from '../../common/services/uploader.service';

@Module({
  controllers: [UploadController],
  providers: [UploaderService],
  exports: [UploaderService],
})
export class UploadModule {}
