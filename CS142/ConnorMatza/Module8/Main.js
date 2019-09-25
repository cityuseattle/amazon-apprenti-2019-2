"use strict";
exports.__esModule = true;
var MergeSort_1 = require("./MergeSort");
var QuickSort_1 = require("./QuickSort");
var Search_1 = require("./Search");
var cases = require("./TestCases");
var testArr = [-2932, 501, 2086, 3879];
var count = 0;
for (var something in cases) {
    if (typeof (cases[something]) == typeof ([])) {
        var mergeSorted = MergeSort_1["default"](cases[something]);
        var quickSorted = QuickSort_1["default"](cases[something]);
        console.log(count);
        console.log("Quicksorted; " + Search_1["default"](quickSorted, testArr[count]) + " MergeSorted: " + Search_1["default"](mergeSorted, testArr[count]));
        count++;
    }
}
