"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    res.render('address', {
        name: 'Joram Howard',
        phoneNumber: '111-222-3333',
        address: '123 Denny Ave'
    });
};
exports.default = handler;
