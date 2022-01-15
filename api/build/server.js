"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var http = __importStar(require("http"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
var database_1 = require("./middleware/database");
var models_repository_1 = require("./users/models.repository");
var models_service_1 = require("./users/models.service");
var models_routes_config_1 = require("./users/models.routes.config");
var port = process.env.PORT || 5000;
var routes = [];
var corsOpts = {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: [],
    credentials: true,
};
var app = express_1.default();
var server = http.createServer(app);
var limiter = express_rate_limit_1.default({
    windowMs: 10 * 60 * 1000,
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(limiter);
app.use(express_mongo_sanitize_1.default({
    replaceWith: '_',
}));
var database = new database_1.Database();
var modelsRepository = new models_repository_1.ModelsRepository(database);
var modelsService = new models_service_1.ModelsService(modelsRepository);
routes.push(new models_routes_config_1.ModelsRoutes(app, modelsService));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve('./src/view/index.html'));
});
server.listen(port, function () {
    routes.forEach(function (route) {
        console.log("\u2714  Routes configured for " + route.getName());
    });
    console.log("\u26A1\uFE0F Server running at http://localhost:" + port);
});
