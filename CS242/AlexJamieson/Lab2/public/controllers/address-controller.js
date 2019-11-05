"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addressController = function (req, res) { return res.render('address', {
    name: 'Alex',
    phoneNumber: '1-800-888-USPS',
    address: '642 12th Ave Kirkland, WA 98033'
}); };
exports.default = addressController;
