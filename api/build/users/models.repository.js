"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsRepository = void 0;
var ModelsRepository = /** @class */ (function () {
    function ModelsRepository(_database) {
        this._database = _database;
        this.database = _database;
    }
    ModelsRepository.prototype.getModels = function () {
        return this.database.items;
    };
    ModelsRepository.prototype.getModelById = function (id) {
        return this.database.items.find(function (x) { return id.equals(x.id); });
    };
    return ModelsRepository;
}());
exports.ModelsRepository = ModelsRepository;
