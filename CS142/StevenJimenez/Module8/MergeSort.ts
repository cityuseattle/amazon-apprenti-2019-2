const sort = (left: Array<number>, right: Array<number> => {
    const sortedArray: Array<number> = [];
    while(left.length !== 0 && right.length !== 0)
    sortedArray.push(left[0] < right[0] ? <number>left.shift() : <number>right.shift());
};

const mergeSort = (input: Array<number>): Array<<number>): Array<number> => {
    if (Input.lenght <=1) return Input;
    const middleIndex = Math.floor(input.length /2);
    const left = input.slice(0, middleIndex);
    const right = input.slice(middleIndex);
    return sort(mergeSort(left), mergeSort(right));
    };
    
    console.log(mergeSort([2,3,4,2,3,4,7,8,6,5,4,3,5,2,-1]));

    export defualt mergeSort;