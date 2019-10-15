"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// like main
// first import required dependencies
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
// if use angular for front end development, then need to use cors in order to define which specific server url's to accept requests
var cors_1 = __importDefault(require("cors"));
// file path must match actual file path of folder structure so know where to import file from
var add_book_1 = __importDefault(require("./controllers/add-book"));
var add_birthday_card_1 = __importDefault(require("./controllers/add-birthday-card"));
var fetch_books_1 = __importDefault(require("./controllers/fetch-books"));
var fetch_cards_1 = __importDefault(require("./controllers/fetch-cards"));
// initiate .env file
dotenv_1.default.config();
// connect to db
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
var db = mongoose_1.default.connection;
// initiate express
var app = express_1.default();
// use express functions
// accept requests from defined server url below, 4200 is the default port for angular js so will always use if using angular
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
// translate js into json req.body (which is required to send to database from controller files)
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// addresses must match filepath as defined in frontend api.service.ts file, so frontend routes to backend properly
// app.post below -> controllers -> add-books.ts -> models -> books.ts -> save to database -> return obj to add-books.ts
// -> print code 200 for success and MEAN stack finishes!
// router below:
app.post('/book', add_book_1.default);
app.post('/birthdayCard', add_birthday_card_1.default);
app.get('/books', fetch_books_1.default);
app.get('/birthdayCards', fetch_cards_1.default);
app.listen(process.env.port, function () { return console.log("The server is running on http://localhost:" + process.env.port); });
//# sourceMappingURL=app.js.map