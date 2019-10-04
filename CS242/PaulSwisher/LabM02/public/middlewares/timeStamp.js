"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeStamp = function (req, res, next) {
    console.log('This will be stamped before the controller running.');
    console.log(new Date());
    next();
    console.log('this will be stamped after the controller is running.');
};
exports.default = timeStamp;
