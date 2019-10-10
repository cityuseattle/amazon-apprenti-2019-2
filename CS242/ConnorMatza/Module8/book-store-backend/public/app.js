"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var dynamodbmapper_1 = require("./dynamodbmapper");
var add_book_1 = __importDefault(require("./controllers/add-book"));
var app = express_1.default();
dotenv_1.default.config();
dynamodbmapper_1.initTables();
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.post('/book', add_book_1.default);
app.listen(process.env.port, function () { return console.log("The server is running on http://localhost:" + process.env.port); });
