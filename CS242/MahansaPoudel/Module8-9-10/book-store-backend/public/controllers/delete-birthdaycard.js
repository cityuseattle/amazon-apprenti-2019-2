"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("../models/card");
var handler = function (req, res) {
    var id = req.params.id;
    try {
        card_1.deleteBirthdayCard(id);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
exports.default = handler;
