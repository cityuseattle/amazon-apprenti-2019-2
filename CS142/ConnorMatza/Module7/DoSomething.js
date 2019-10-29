"use strict";
exports.__esModule = true;
var Instrument;
(function (Instrument) {
    Instrument["Piano"] = "Piano";
    Instrument["Guitar"] = "Guitar";
    Instrument["Violin"] = "Violin";
    Instrument["Cello"] = "Cello";
})(Instrument = exports.Instrument || (exports.Instrument = {}));
function play(instrument) {
    console.log('Playing ' + instrument + '.');
}
exports.play = play;
function testMap() {
    var map = {
        Sam: 'Professor'
    };
    map['Kevin'] = 'TA';
    console.log(map['Sam']);
    console.log(map['Kevin']);
}
exports.testMap = testMap;
function twoSum(nums, target) {
    var out = [0, 0];
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            map[nums[i]].push(i);
        }
        else {
            map[nums[i]] = [i];
        }
    }
    nums.sort(function (a, b) { return a - b; });
    var ptr1 = 0;
    var ptr2 = nums.length - 1;
    while (ptr1 < ptr2) {
        if (nums[ptr1] + nums[ptr2] < target) {
            ptr1++;
        }
        else if (nums[ptr1] + nums[ptr2] > target) {
            ptr2--;
        }
        else {
            break;
        }
    }
    if (ptr1 === ptr2) {
        return [0, 0];
    }
    else {
        return [map[nums[ptr1]].pop(), map[nums[ptr2]].pop()];
    }
}
exports["default"] = twoSum;
function twoSumSolution(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; ++i) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
    return [0, 0];
}
exports.twoSumSolution = twoSumSolution;
