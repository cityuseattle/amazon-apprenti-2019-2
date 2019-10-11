"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var birthday_card_1 = require("../models/birthday-card");
var handler = function (req, res) {
    var id = req.params.id;
    try {
        birthday_card_1.deleteBirthdaycard(id);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
exports.default = handler;
//# sourceMappingURL=delete-birthdaycard.js.map