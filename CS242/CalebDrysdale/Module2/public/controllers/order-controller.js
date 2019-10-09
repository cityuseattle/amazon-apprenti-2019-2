"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    console.log('This order controller is called.');
    res.end('This is the order page');
    console.log('This order controller is finished.');
};
exports.default = handler;
