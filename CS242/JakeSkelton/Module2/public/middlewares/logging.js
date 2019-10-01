"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res, next) {
    console.log('This will be logged before the controller running.');
    console.log(req.headers);
    next();
    console.log('This will be logged after the controller running.');
};
exports.default = handler;
