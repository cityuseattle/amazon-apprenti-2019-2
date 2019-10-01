"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    res.render('address', {
        name: 'Phillip Preyer',
        phoneNumber: '253-678-7738',
        address: '2217 3rd Ave #703, Seattle Wa 98121'
    });
};
exports.default = handler;
