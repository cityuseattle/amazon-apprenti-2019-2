"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeStamp = function (req, res, next) {
    console.log('This will be logged before the controller is running.');
    console.log(new Date());
    next();
    console.log('This will be logged after the controller is running');
};
exports.default = timeStamp;
