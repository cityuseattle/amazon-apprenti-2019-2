"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var dynamodbmapper_1 = require("./dynamodbmapper");
var add_book_1 = __importDefault(require("./controllers/add-book"));
var add_birthday_card_1 = __importDefault(require("./controllers/add-birthday-card"));
var fetch_books_1 = __importDefault(require("./controllers/fetch-books"));
var fetch_birthday_cards_1 = __importDefault(require("./controllers/fetch-birthday-cards"));
var fetch_book_1 = __importDefault(require("./controllers/fetch-book"));
var update_book_1 = __importDefault(require("./controllers/update-book"));
var delete_book_1 = __importDefault(require("./controllers/delete-book"));
var update_birthday_card_1 = __importDefault(require("./controllers/update-birthday-card"));
var delete_birthday_card_1 = __importDefault(require("./controllers/delete-birthday-card"));
var app = express_1.default();
dotenv_1.default.config();
dynamodbmapper_1.initTables();
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.put('/birthdayCard', update_birthday_card_1.default);
app.delete('/birthdayCard/:id', delete_birthday_card_1.default);
app.get('/books', fetch_books_1.default);
app.get('/book/:id', fetch_book_1.default);
app.post('/book', add_book_1.default);
app.put('/book', update_book_1.default);
app.post('/birthdayCard', add_birthday_card_1.default);
app.get('/birthdayCards', fetch_birthday_cards_1.default);
app.delete('/book/:id', delete_book_1.default);
app.listen(process.env.port, function () { return console.log("The server is running on http://localhost:" + process.env.port); });
