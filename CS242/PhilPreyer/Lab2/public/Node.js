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
app.get('/', function (req, res) { return res.render('address', {
    name: 'Phillip Preyer',
    phoneNumber: '253-678-7738',
    address: '2217 3rd Ave #703, Seattle Wa 98121'
}); });
app.get('/address', address_controller_1.default);
app.listen(4000, function () { return console.log('The server is running on http://localhost:4000'); });
