"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addressController = function (req, res) { return res.render('addresses', {
    name: 'Marvin',
    phoneNumber: '2222222222',
    address: '42 Big Walk wWay'
}); };
exports.default = addressController;
