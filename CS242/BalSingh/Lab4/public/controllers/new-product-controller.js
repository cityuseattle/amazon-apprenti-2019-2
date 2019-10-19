"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, price = _a.price, weight = _a.weight, amount = _a.amount, providers = _a.providers;
    /* The above line actually can be written as follows:
    const title = req.body.title;
    const price = req.body.price;
    const weight = req.body.weight;
    const amount = req.body.amount;
    const providers = req.body.providers;
    */
    try {
        product_1.createProduct(title, price, weight, amount, JSON.parse(providers));
        res.end("The prodcut " + title + " has been created.");
    }
    catch (err) {
        console.error(err);
        res.end('Something went wrong. Please check your input data.');
    }
};
exports.default = handler;
