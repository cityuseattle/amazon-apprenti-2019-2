"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var new_product_controller_1 = __importDefault(require("./controllers/new-product-controller"));
var find_product_controller_1 = __importDefault(require("./controllers/find-product-controller"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
var db = mongoose_1.default.connection;
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) { return res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}); });
app.get('/productForm', function (req, res) { return res.render('product-form'); });
app.post('/product', new_product_controller_1.default);
app.get('/product', find_product_controller_1.default);
app.listen(4000, function () { return console.log('The server is running on http://localhost:4000'); });
