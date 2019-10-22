"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exported method to define book object with user input and save, from corresponding models folder
var book_1 = require("../models/book");
// THIS IS THE LAST FUNCTION RUN BY THIS MEAN STACK... results in success or failure writing user input to db
var handler = function (req, res) {
    // req.body data is translated with bodyParser in the app.ts file into JSON, required to add to the database
    var _a = req.body, title = _a.title, isbn = _a.isbn, author = _a.author, picture = _a.picture, price = _a.price;
    try {
        book_1.addBook(title, isbn, author, picture, price);
    }
    catch (err) {
        console.error(err);
        // 500 = server error
        res.status(500).end();
    }
    // 200 = successful
    res.status(200).end();
};
// if keyword default is used, then can use this variable by different name other places (for example "AddBookController")
exports.default = handler;
//# sourceMappingURL=add-book.js.map