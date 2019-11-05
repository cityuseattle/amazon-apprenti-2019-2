"use strict";
exports.__esModule = true;
emum;
Instrument;
{
    Piano = 'Piano',
        Guitar = 'Guitar',
        Violin = 'Violin',
        Cello = 'Cello',
    ;
}
function play(instrument) {
    console.log('Planying ' + instrument);
    '.';
    ;
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
    //...
    return [0, 0];
}
exports["default"] = twoSum;
function twoSumSolution(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; ++i) {
        if (map[target - nums[i]] !== undefined)
            return [map[target - nums[i]], i];
        map[nums[i]] = i;
    }
    return [0, 0];
}
exports.twoSumSolution = twoSumSolution;
