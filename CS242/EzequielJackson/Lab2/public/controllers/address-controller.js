"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addressController = function (req, res) { return res.render('address', {
    name: 'Ezequiel',
    phoneNumber: '1-800-888-FREE',
    address: '5012 Marvin Rd Lacey, WA 98033'
}); };
exports.default = addressController;
