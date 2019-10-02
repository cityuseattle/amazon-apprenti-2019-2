"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    console.log('The address controller is called. ');
    res.render('address', {
        name: 'Insert your name here: ',
        phoneNumber: 'Insert your phone number here: ',
        address: 'Insert your address here: '
    });
    console.log('The address controller is finished.');
};
exports.default = handler;
