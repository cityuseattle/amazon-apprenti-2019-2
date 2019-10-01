"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging = function (req, res, next) {
    console.log('This is be logged before the controller is running');
    console.log(new Date());
    next();
    console.log('This will be logged after the controller has run. ');
};
exports.default = logging;
