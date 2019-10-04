"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var order_controller_1 = __importDefault(require("./controllers/order-controller"));
var new_user_controller_1 = __importDefault(require("./controllers/new-user-controller"));
var find_user_controller_1 = __importDefault(require("./controllers/find-user-controller"));
var mapper_1 = require("./mapper");
var path_1 = __importDefault(require("path"));
var dotenvdir = path_1.default.resolve(__dirname, ".env");
dotenv_1.default.config({ path: dotenvdir });
mapper_1.initTables();
var app = express_1.default();
// support parsing of application/json type post data
app.use(body_parser_1.default.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('../public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// The router
app.get('/', function (req, res) { return res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}); });
app.get('/order', order_controller_1.default);
app.get('/userForm', function (req, res) {
    res.render('user-form');
});
app.post('/user', new_user_controller_1.default);
app.get('/user', find_user_controller_1.default);
app.listen(3000, function () { return console.log('The server is running on http://localhost:3000'); });
