let input = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

function linearSearch(arr: number [], target: number)
{   
    for(let i = 0; i < arr.length; ++i)
        if(target === arr[i])
        return i;
return -1;
}

function binarySearch(arr: number[], target: number)
{
    let front = 0, back = arr.length -1;
    while(front <= back)
    {
    let middle = Math.floor((front + back) / 2);
    if(target < arr[middle])
        back = middle -1;
    else if(target > arr[middle])
        front = middle + 1;
    else
        return middle;
        
    }
    return -1;
}
// Given an array input and a target number,
//search for the number index in the array.
// console.log(linearSearch(input, 9));

//for(let i = 1; i <= 10; i++)
 //   console.log(binarySearch(input, i * 3));
export default binarySearch;