"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var quickSort = function (input) {
    if (input.length === 0)
        return [];
    var povitIndex = Math.floor(Math.random() * input.length);
    var left = [];
    var right = [];
    input.forEach(function (num, index) {
        if (index !== povitIndex)
            num < input[povitIndex] ? left.push(num) : right.push(num);
    });
    return __spreadArrays(quickSort(left), [input[povitIndex]], quickSort(right));
};
//console.log(quickSort([2,3,4,2,3,4,7,8,6,5,4,3,5,2,-1]));
exports["default"] = quickSort;
