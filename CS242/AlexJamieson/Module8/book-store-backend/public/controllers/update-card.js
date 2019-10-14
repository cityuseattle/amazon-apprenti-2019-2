"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var birthday_card_1 = require("../models/birthday-card");
var Handler = function (req, res) {
    var _a = req.body, title = _a.title, material = _a.material, picture = _a.picture, price = _a.price, _id = _a._id;
    try {
        birthday_card_1.updateCard(_id, title, material, picture, price);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
exports.default = Handler;
