"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var address_controller_1 = __importDefault(require("./controllers/address-controller"));
var timestamp_1 = __importDefault(require("./middlewares/timestamp"));
var app = express_1.default();
app.use(timestamp_1.default);
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
// The router
app.get('/address', function (req, res) { return res.render('address', {
    name: address_controller_1.default[0],
    phoneNumber: address_controller_1.default[1],
    address: address_controller_1.default[2],
}); });
app.get('/', function (req, res) { return res.end('This is the Express server for CS242 Lab 02. Please go to the following link http://localhost:4000/address'); });
app.listen(4000, function () { return console.log('The server is running on http://localhost:4000/address'); });
