"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, price = _a.price, weight = _a.weight, quantity = _a.quantity, vendor = _a.vendor;
    /* The above line actually can be written as follows:
    const title = req.body.title;
    const price = req.body.price;
    const weight = req.body.weight;
    const quantity = req.body.quantity;
    const vendor = req.body.vendor;
    */
    try {
        product_1.createProduct(title, price, weight, quantity, JSON.parse(vendor));
        res.end("The product " + title + " has been created.");
    }
    catch (err) {
        console.error(err);
        res.end("Something went wrong. Please check your input data.");
    }
};
exports.default = handler;
