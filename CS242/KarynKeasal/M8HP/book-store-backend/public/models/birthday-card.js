"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var schema = new mongoose_1.default.Schema({
    productTitle: { type: String, required: true },
    material: { type: String, required: true },
    picture: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
});
var Birthday = mongoose_1.default.model('Birthday', schema);
exports.addBirthdayCard = function (productTitle, material, picture, price) {
    new Birthday({ productTitle: productTitle, material: material, picture: picture, price: price }).save();
};
