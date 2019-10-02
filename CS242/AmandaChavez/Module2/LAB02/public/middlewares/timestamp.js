"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timestamp = function (req, res, next) {
    var date = new Date();
    var timestamp = date.valueOf();
    console.log("Timestamp is:" + date);
    next();
};
exports.default = timestamp;
