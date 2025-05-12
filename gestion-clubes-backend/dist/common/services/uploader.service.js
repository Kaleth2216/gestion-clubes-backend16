"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploaderService = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const common_1 = require("@nestjs/common");
const process_1 = require("process");
let UploaderService = class UploaderService {
    constructor() {
        this.bucketName = process_1.env.awsBucketName;
        this.client = new client_s3_1.S3Client({
            region: process_1.env.awsRegion,
            credentials: {
                accessKeyId: process_1.env.awsAccessKey,
                secretAccessKey: process_1.env.awsSecretKey,
            },
        });
    }
    // Declaración manual del tipo Multer file
    async upload(image, key) {
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: key + '.jpg',
            Body: image.buffer,
        });
        await this.client.send(command);
    }
    async getSignedUrl(key) {
        const command = new client_s3_1.GetObjectCommand({
            Bucket: this.bucketName,
            Key: key + '.jpg',
        });
        return await (0, s3_request_presigner_1.getSignedUrl)(this.client, command, { expiresIn: 3600 });
    }
    async delete(key) {
        const command = new client_s3_1.DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: key + '.jpg',
        });
        await this.client.send(command);
    }
};
exports.UploaderService = UploaderService;
exports.UploaderService = UploaderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UploaderService);
//# sourceMappingURL=uploader.service.js.map