"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    res.render('address', {
        name: 'Joker',
        phoneNumber: '888-111-8888',
        address: '123 Gotham St'
    });
};
exports.default = handler;
