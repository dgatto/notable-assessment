"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var js_guid_1 = require("js-guid");
var Database = /** @class */ (function () {
    function Database() {
        this.items = [
            { id: js_guid_1.Guid.newGuid(), name: 'model 1' },
            { id: js_guid_1.Guid.newGuid(), name: 'model 2' },
            { id: js_guid_1.Guid.newGuid(), name: 'model 3' },
            { id: js_guid_1.Guid.newGuid(), name: 'model 4' },
        ];
    }
    return Database;
}());
exports.Database = Database;
