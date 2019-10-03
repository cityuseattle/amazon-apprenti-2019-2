"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_controller_1 = __importDefault(require("./controllers/order-controller"));
var app = express_1.default();
// The router
app.get('/', function (req, res) { return res.end('This is your Express server.'); });
app.get('/order', order_controller_1.default);
app.listen(3000, function () { return console.log('The server is running on http://localhost:3000'); });
