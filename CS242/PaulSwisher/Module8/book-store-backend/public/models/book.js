"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// Build a schema and use it to do the validation
var schema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    author: { type: String, required: true },
    picture: { type: String, required: true },
    price: { type: Number, reuqired: true, min: 0 }
});
var User = mongoose_1.default.model('User', schema);
// Create a new user in the database
exports.addBook = function (title, isbn, author, picture, price) {
    new User({ title: title, isbn: isbn, author: author, picture: picture, price: price }).save();
};
