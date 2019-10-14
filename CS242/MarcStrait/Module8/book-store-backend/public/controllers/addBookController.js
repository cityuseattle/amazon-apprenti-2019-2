"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../models/book");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, isbn = _a.isbn, author = _a.author, picture = _a.picture, price = _a.price;
    try {
        book_1.addBook(title, isbn, author, picture, price);
    }
    catch (err) {
        console.error(err);
        /*
          The 500 Internal Server Error is a very general HTTP status code that
          means something has gone wrong on the website's server,
          but the server could not be more specific on
          what the exact problem is.
        */
        res.status(500).end();
    }
    /*
      200 implies that the response contains a payload that
      represents the status of the requested resource.
    */
    res.status(200).end();
};
// There is only a single default export per module.
// A default export can be a function, a class, an object or anything else.
exports.default = handler;
