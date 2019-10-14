"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, weight = _a.weight, price = _a.price, ammount = _a.ammount, provider = _a.provider;
    try {
        product_1.createProduct(title, weight, price, ammount, provider);
        res.end("The product " + title + " has been created.");
    }
    catch (err) {
        console.error(err);
    }
    res.end("Something went wrong. please check your input data.");
};
exports.default = handler;
