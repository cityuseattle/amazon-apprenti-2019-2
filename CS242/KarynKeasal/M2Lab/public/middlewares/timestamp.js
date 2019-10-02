"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeStamp = (function (req, res, next) {
    console.log(new Date());
    next();
});
exports.default = timeStamp;
