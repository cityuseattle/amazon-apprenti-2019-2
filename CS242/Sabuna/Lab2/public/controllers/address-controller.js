"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) {
    res.render('index', {
        name: 'My name is GUNUN',
        address: '2121 seattle hill road',
        phoneNumber: "24444--44-4--444"
    });
};
exports.default = handler;
