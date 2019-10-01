const quickSort = (input: Array<number>): Array<number> => {
    if (input.length === 0) return [];
    const povitIndex = Math.floor(Math.random() * input.length);
    const left: Array<number> = [];
    const right: Array<number> = [];
    input.forEach((num, index) => {
        if (index !== povitIndex)
            num < input[povitIndex] ? left.push(num) : right.push(num);
    });
    return [...quickSort(left), input[povitIndex], ...quickSort(right)];
};

//console.log(quickSort([2,3,4,2,3,4,7,8,6,5,4,3,5,2,-1]));

export default quickSort;