"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var addCardController_1 = __importDefault(require("./controllers/addCardController"));
var addBookController_1 = __importDefault(require("./controllers/addBookController"));
var fetchBooks_1 = __importDefault(require("./controllers/fetchBooks"));
var fetchCards_1 = __importDefault(require("./controllers/fetchCards"));
var updateBook_1 = __importDefault(require("./controllers/updateBook"));
var updateBook_2 = __importDefault(require("./controllers/updateBook"));
var deleteBook_1 = __importDefault(require("./controllers/deleteBook"));
var fetchCard_1 = __importDefault(require("./controllers/fetchCard"));
var updateCard_1 = __importDefault(require("./controllers/updateCard"));
var deleteCard_1 = __importDefault(require("./controllers/deleteCard"));
dotenv_1.default.config();
//Intialize DB
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose_1.default.set('useFindAndModify', false);
var db = mongoose_1.default.connection;
var app = express_1.default();
//Set Access Controll Allow Origin to localhost 4200 to allow angular app to call api
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
//support parsing of application/json type post data
app.use(body_parser_1.default.json());
//suport parsing of application x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({ extended: true }));
//Router
app.post('/book', addBookController_1.default);
app.post('/birthdayCard', addCardController_1.default);
app.get('/books', fetchBooks_1.default);
app.get('/birthdayCards', fetchCards_1.default);
app.get('/book/:id', updateBook_1.default);
app.get('/birthdayCard/:id', fetchCard_1.default);
app.put('/book', updateBook_2.default);
app.put('/birthdayCard', updateCard_1.default);
app.delete('/book/:id', deleteBook_1.default);
app.delete('/birthdayCard/:id', deleteCard_1.default);
app.listen(process.env.port, function () { return console.log("The server is running on http://localhost:" + process.env.port); });
//Find a book based on the title
