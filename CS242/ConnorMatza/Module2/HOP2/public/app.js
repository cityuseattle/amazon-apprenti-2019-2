"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logging_1 = __importDefault(require("./middlewares/logging"));
var app = express_1.default();
app.use(logging_1.default);
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) { return res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}); });
app.listen(3000, function () { return console.log("Server is listening at http://localhost:3000"); });
