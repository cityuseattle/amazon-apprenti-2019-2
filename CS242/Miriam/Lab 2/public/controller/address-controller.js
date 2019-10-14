"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    return res.render('address', {
        name: 'Miriam Clark',
        phoneNumber: '610-347-9234',
        address: '123 Seattle Ave'
    });
};
exports.default = handler;
