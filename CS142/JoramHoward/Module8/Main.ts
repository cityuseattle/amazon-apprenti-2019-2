import mergeSort from './MergeSort';
import quickSort from './QuickSort';
import binarySearch from './Search';
import * as test from './TestCases';

let sortedArray: number[];

sortedArray = mergeSort(test.case1);
console.log(binarySearch(sortedArray, -2932));

sortedArray = quickSort(test.case1);
console.log(binarySearch(sortedArray, -2932));

sortedArray = mergeSort(test.case2);
console.log(binarySearch(sortedArray, 501));

sortedArray = quickSort(test.case2);
console.log(binarySearch(sortedArray, 501));

sortedArray = mergeSort(test.case3);
console.log(binarySearch(sortedArray, 2086));

sortedArray = quickSort(test.case3);
console.log(binarySearch(sortedArray, 2086));

sortedArray = mergeSort(test.case4);
console.log(binarySearch(sortedArray, 3879));

sortedArray = quickSort(test.case4);
console.log(binarySearch(sortedArray, 3879));