"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
/*
  Cross-Origin Resource Sharing (CORS) is a mechanism that allows restricted
  resources on a web page to be requested from another domain
  outside the domain from which the first resource was served.
*/
var cors_1 = __importDefault(require("cors"));
var addBookController_1 = __importDefault(require("./controllers/addBookController"));
dotenv_1.default.config();
// Initialize MongDB
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
var db = mongoose_1.default.connection;
var app = express_1.default();
/*
  A web page may freely embed cross-origin images, stylesheets, scripts,
  iframes, and videos.
  Certain "cross-domain" requests, notably Ajax requests, are forbidden
  by default by the same-origin security policy.
  Allow Access-Control-Allow-Origin (ACAO) to the given URL.
*/
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
// support parsing of application/json type post data
app.use(body_parser_1.default.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Create nd return a new book
app.post('/book', addBookController_1.default);
app.listen(process.env.PORT, function () { return console.log("The server is running on http://localhost " + process.env.PORT); });
