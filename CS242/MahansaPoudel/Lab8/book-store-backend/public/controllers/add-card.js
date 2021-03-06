"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("../models/card");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, material = _a.material, picture = _a.picture, price = _a.price;
    try {
        card_1.addCard(title, material, picture, price);
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
    res.status(200).end();
};
exports.default = handler;
