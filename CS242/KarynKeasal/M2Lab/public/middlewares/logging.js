"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging = function (req, res, next) {
    console.log('Controller start.');
    console.log(req.headers);
    next();
    console.log('Controller finished.');
};
exports.default = logging;
