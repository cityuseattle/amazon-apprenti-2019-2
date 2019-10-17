"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging = function (req, res, next) {
    console.log('this will be logged before the controller running');
    console.log(req.headers);
    next();
    console.log('this is after the controller');
};
exports.default = logging;
