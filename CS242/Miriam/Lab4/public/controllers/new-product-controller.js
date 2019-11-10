"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, weight = _a.weight, price = _a.price, amount = _a.amount, providers = _a.providers;
    /* The above line actually can be written as follows:
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const age = req.body.age;
    */
    try {
        product_1.createProduct(title, weight, price, amount, JSON.parse(providers));
        res.end("The product " + title + " has been created.");
    }
    catch (err) {
        console.log(err);
        res.end("Something went wrong. Please check your input data.");
    }
};
exports.default = handler;