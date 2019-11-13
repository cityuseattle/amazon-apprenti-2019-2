"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var address_controller_1 = __importDefault(require("/Users/skejakob/amazon-apprenti-2019-2/CS242/JakeSkelton/Module2/controllers/address-controller"));
var timestamp_1 = __importDefault(require("/Users/skejakob/amazon-apprenti-2019-2/CS242/JakeSkelton/Module2/middlewares/timestamp"));
var app = express_1.default();
app.use(timestamp_1.default);
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) { return res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the address page.'
}); });
app.get('/', function (req, res) { return res.end("This is your Express server."); });
app.get('/address', address_controller_1.default);
app.listen(4000, function () { return console.log('The server is running on http://localhost:4000'); });
