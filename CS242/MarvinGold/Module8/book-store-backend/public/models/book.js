"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
//Schema time
var schema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    author: { type: String, required: true },
    //validation for picture URL
    picture: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
});
var Book = mongoose_1.default.model('Book', schema);
//create book in DB
exports.addBook = function (title, isbn, author, picture, price) {
    new Book({ title: title, isbn: isbn, author: author, picture: picture, price: price }).save();
};
