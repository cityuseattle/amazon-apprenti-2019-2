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
var add_book_1 = __importDefault(require("./controllers/add-book"));
/*import addBirthdayCardController from './controllers/add-birthday-card';*/
var fetch_books_1 = __importDefault(require("./controllers/fetch-books"));
/*import fetchBirthdayCards from './controllers/fetch-birthday-cards';*/
var fetch_books_2 = __importDefault(require("./controllers/fetch-books"));
var update_book_1 = __importDefault(require("./controllers/update-book"));
var delete_book_1 = __importDefault(require("./controllers/delete-book"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose_1.default.set('useFindAndModify', false);
var db = mongoose_1.default.connection;
var app = express_1.default();
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.post('/book', add_book_1.default);
/*app.post('/birthdayCard', addBirthdayCardController);*/
app.get('/books', fetch_books_1.default);
/*app.get('/birthdayCards', fetchBirthdayCards);*/
app.get('/book/:id', fetch_books_2.default);
app.put('/book', update_book_1.default);
app.delete('/book/:id', delete_book_1.default);
app.listen(process.env.port, function () { return console.log("The server is running on http://localhost:" + process.env.port); });
