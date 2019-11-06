import mergeSort from './MergeSort';
import quickSort from './QuickSort';
import binarySearch from './Search';
import * as cases from './TestCases';

let testArr = [-2932,501,2086,3879]
let count = 0
for (var something in cases) {
    if (typeof(cases[something]) == typeof([])) {
    let mergeSorted = mergeSort(cases[something]);
    let quickSorted = quickSort(cases[something]);
    console.log(count)
    console.log("Quicksorted; " + binarySearch(quickSorted, testArr[count]) + " MergeSorted: " + binarySearch(mergeSorted, testArr[count]));
    count++;
    }
}
