import * as doIt from './DoSomething';
import twoSum from './DoSomething';

doIt.play(doIt.Instrument.Piano);
doIt.testMap();

interface Input {
    arr: number[]
    target: number
}

let input: Input[] = [
    {arr: [3, 8, 12, 2], target: 11},
    {arr: [7, 4, 7], target: 14},
    {arr: [-3, 4, 8, 3], target: 0},
    {arr: [1, 0, 7, 0], target: 0}
];

input.forEach(item => {
    console.log('My Answer:', twoSum(item.arr, item.target));
    console.log('Solution: ', doIt.twoSumSolution(item.arr,item.target));
});