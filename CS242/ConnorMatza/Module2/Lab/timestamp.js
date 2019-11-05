"use strict";
exports.__esModule = true;
var timestamp = function (req, res, next) {
    console.log(new Date() + "New incoming request");
    next();
};
exports.timestamp = timestamp;
