"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    console.log('The address controller is called.');
    res.end('This is the address page');
    console.log('The address controller is finished');
};
exports.default = handler;
