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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancesController = void 0;
const common_1 = require("@nestjs/common");
const finances_service_1 = require("../services/finances.service");
const create_transaction_dto_1 = require("../dto/create-transaction.dto");
const update_transaction_dto_1 = require("../dto/update-transaction.dto");
let FinancesController = class FinancesController {
    constructor(financesService) {
        this.financesService = financesService;
    }
    // 🟢 Crea una nueva transacción (ingreso o gasto) en la base de datos
    create(createTransactionDto) {
        return this.financesService.create(createTransactionDto);
    }
    // 🟡 Obtiene todas las transacciones registradas
    findAll() {
        return this.financesService.findAll();
    }
    // 🔵 Busca una transacción por su ID (UUID)
    findOne(id) {
        return this.financesService.findOne(id);
    }
    // 🟣 Actualiza una transacción específica según su ID (UUID)
    update(id, updateTransactionDto) {
        return this.financesService.update(id, updateTransactionDto);
    }
    // 🔴 Elimina una transacción usando su ID (UUID)
    remove(id) {
        return this.financesService.remove(id);
    }
};
exports.FinancesController = FinancesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_dto_1.CreateTransactionDto]),
    __metadata("design:returntype", void 0)
], FinancesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FinancesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinancesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_transaction_dto_1.UpdateTransactionDto]),
    __metadata("design:returntype", void 0)
], FinancesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinancesController.prototype, "remove", null);
exports.FinancesController = FinancesController = __decorate([
    (0, common_1.Controller)('finances'),
    __metadata("design:paramtypes", [finances_service_1.FinancesService])
], FinancesController);
//# sourceMappingURL=finances.controller.js.map