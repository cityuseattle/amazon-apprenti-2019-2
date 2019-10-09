"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
//Schema time
var schema = new mongoose_1.default.Schema({
    title: { type: String,
        required: true },
    material: { type: String,
        required: true },
    //validation for picture URL
    picture: { type: String,
        required: true },
    price: { type: Number,
        required: true,
        min: 0 },
});
var Card = mongoose_1.default.model('Card', schema);
//create Card in DB
exports.addCard = function (title, material, picture, price) {
    new Card({ title: title, material: material, picture: picture, price: price }).save();
};
