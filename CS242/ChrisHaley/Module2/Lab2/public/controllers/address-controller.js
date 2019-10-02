"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) { return res.render('address', {
    name: 'John Doe',
    phoneNumber: 'Phone Number: (123) 456 - 7890',
    address: 'Address, City, State, ZIP'
}); };
exports.default = handler;
