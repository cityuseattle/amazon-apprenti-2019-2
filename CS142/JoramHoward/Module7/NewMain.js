"use strict";
exports.__esModule = true;
var doIT = require("./DoSomething");
var DoSomething_1 = require("./DoSomething");
doIT.play(doIT.Instrument.Piano);
doIT.testMap();
var input = [
    { arr: [3, 8, 12, 2], target: 11 },
    { arr: [7, 4, 7], target: 14 },
    { arr: [-3, 4, 8, 3], target: 0 },
    { arr: [1, 0, 7, 0], target: 0 },
];
input.forEach(function (item) {
    console.log('My Answer:', DoSomething_1["default"](item.arr, item.target));
    console.log('Solution: ', doIT.twoSumSolution(item.arr, item.target));
});
