"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var sort = function (left, right) {
    var sortedArray = [];
    while (left.length !== 0 && right.length !== 0)
        sortedArray.push(left[0] < right[0] ? left.shift() : right.shift());
    return __spreadArrays(sortedArray, left, right);
};
var mergeSort = function (input) {
    if (input.length <= 1)
        return input;
    var middleIndex = Math.floor(input.length / 2);
    var left = input.slice(0, middleIndex);
    var right = input.slice(middleIndex);
    return sort(mergeSort(left), mergeSort(right));
};
//console.log(mergeSort([2,3,4,2,3,4,7,8,6,5,4,3,5,2,-1]));
exports["default"] = mergeSort;
