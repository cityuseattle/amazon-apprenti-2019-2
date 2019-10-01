"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    console.log('The address controller is called.');
    res.render('address', {
        name: 'Enter your name here.',
        phoneNumber: 'Enter your phone number here',
        address: 'Enter your address here'
    });
    console.log('The address controller is finished.');
};
exports.default = handler;
