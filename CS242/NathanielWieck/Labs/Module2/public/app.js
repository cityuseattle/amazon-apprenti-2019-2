"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var address_controller_1 = __importDefault(require("./controllers/address-controller"));
var index_controller_1 = __importDefault(require("./controllers/index-controller"));
var timestamp_1 = __importDefault(require("./middlewares/timestamp"));
var app = express_1.default();
app.use(timestamp_1.default);
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) { return res.render('index', {
    title: 'This is the index.'
}); });
app.get('/', index_controller_1.default);
app.get('/address', function (req, res) { return res.render('address', {
    name: 'Professor WTF',
    phoneNumber: '123-456-7890.',
    address: '2nd Star (to the right, straight on until morning).'
}); });
app.get('/address', address_controller_1.default);
app.listen(4000, function () { return console.log('The server is running on http://localhost:4000'); });
