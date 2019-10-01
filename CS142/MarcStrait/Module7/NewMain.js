"use strict";
exports.__esModule = true;
var doIt = require("./DoSomething");
var DoSomething_1 = require("./DoSomething");
doIt.play(doIt.Instrument.Piano);
doIt.testMap();
var input = [
    { arr: [3, 8, 12, 2], target: 11 },
    { arr: [7, 4, 7], target: 14 },
    { arr: [-3, 4, 8, 3], target: 0 },
    { arr: [1, 0, 7, 0], target: 0 }
];
input.forEach(function (item) {
    console.log('My Answer: ', DoSomething_1["default"](item.arr, item.target));
    console.log('Solution: ', doIt.twoSumSolution(item.arr, item.target));
});
