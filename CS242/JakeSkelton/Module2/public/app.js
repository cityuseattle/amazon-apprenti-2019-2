"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) { return res.end("This is your Express server."); });
app.listen(4000, function () { return console.log('The server is running on http://localhost:4000'); });
