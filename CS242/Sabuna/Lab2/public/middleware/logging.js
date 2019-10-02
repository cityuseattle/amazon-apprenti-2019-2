"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging = function (req, res, next) {
    console.log('This will be logged before the contoller running.');
    console.log(req.headers);
    next();
    console.log('this will be logged after the controller running.');
};
exports.default = logging;
