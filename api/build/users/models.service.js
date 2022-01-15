"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsService = void 0;
var js_guid_1 = require("js-guid");
var ModelsService = /** @class */ (function () {
    function ModelsService(_repository) {
        this._repository = _repository;
        this.repository = _repository;
    }
    ModelsService.prototype.getModelById = function (id) {
        var model = this.repository.getModelById(new js_guid_1.Guid(id));
        if (!model) {
            return {
                status: false,
                message: 'Model not found.',
            };
        }
        return {
            status: true,
            message: 'Model successfully found.',
            payload: { model: model },
        };
    };
    return ModelsService;
}());
exports.ModelsService = ModelsService;
