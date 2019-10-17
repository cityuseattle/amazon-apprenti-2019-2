"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, weight = _a.weight, price = _a.price, amount = _a.amount, providers = _a.providers;
    try {
        product_1.createProduct(title, weight, price, amount, providers);
        res.end("The product " + title + " has been created.");
    }
    catch (err) {
        console.error(err);
        res.end("Something went wrong. Please check your input data.");
    }
};
exports.default = handler;
