"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    res.render('address', {
        name: 'Bal Singh',
        phoneNumber: '555-555-5555',
        address: '111 1st Ave.'
    });
};
exports.default = handler;
