"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timestamp = function (req, res, next) {
    console.log('This will be logged before the controller running.');
    console.log(new (Date));
    next();
    console.log('This will be logged after the controller running.');
};
exports.default = timestamp;
