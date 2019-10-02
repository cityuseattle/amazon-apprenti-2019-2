"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res, next) {
    console.log(new Date());
    next();
};
exports.default = handler;
