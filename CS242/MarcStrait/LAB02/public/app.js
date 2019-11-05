"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_controller_1 = __importDefault(require("./controllers/order-controller"));
var app = express_1.default();
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
// The router
app.get('/', function (req, res) { return res.render('address', {
    name: 'Please enter your name',
    phoneNumber: 'Enter your phone number.',
    address: 'Enter your address.'
}); });
app.get('/address', order_controller_1.default);
app.listen(4000, function () { return console.log('The server is running on http://localhost:4000'); });
