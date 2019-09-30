let input = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

function linearSearch(arr: number [], target: number)
{
    for(let i = 0; i < arr.length; ++i)
    if(target === arr[i])
    return i;
    return -1;
}

// Given an array input and a target number,
// Search for the number index in the array.
// console.log(linearSearch(input, 9));

for(let i =1; i <= 10; i ++)
console.log(binarySearch(input, i * 3));

export default binarySearch;