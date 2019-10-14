"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    console.log('The index controller is being called.');
    res.end('This is the index page');
    console.log('The index controller is done.');
};
exports.default = handler;
