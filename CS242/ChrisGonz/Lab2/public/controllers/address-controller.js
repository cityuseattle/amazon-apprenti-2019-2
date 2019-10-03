"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    console.log('The address controller is called.');
    res.render('./address');
    console.log('The address controller is finished.');
};
exports.default = handler;
