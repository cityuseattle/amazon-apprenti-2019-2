"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeStamp = function (req, res, next) {
    console.log(new Date());
    next(); //invokes the next middleware function in the app
};
exports.default = timeStamp;
