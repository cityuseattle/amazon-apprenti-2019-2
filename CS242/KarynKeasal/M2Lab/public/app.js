"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var address_controller_1 = __importDefault(require("./controllers/address-controller"));
var logging_1 = __importDefault(require("./middlewares/logging"));
var timestamp_1 = __importDefault(require("./middlewares/timestamp"));
var app = express_1.default();
app.use(timestamp_1.default);
app.use(logging_1.default);
app.use(timestamp_1.default);
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
// The router
app.get('/address', address_controller_1.default, function (req, res) { return res.render('address', {
    name: 'Enter your name here.',
    phoneNumber: 'Enter your phone number here',
    address: 'Enter your address here'
}); });
app.get('/', function (req, res) { return res.end('This is my home page.'); });
app.listen(4000, function () { return console.log('This server is running on http://localhost:4000'); });
