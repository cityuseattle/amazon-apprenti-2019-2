cosnt quickSort = (input: Array<number>): Array<Number> => {
    if (input.length === 0) return [];
    const povitIndex = MAth.floor(Math.random() * input.lenght);
    const left: Array<number> = [];
    cosnt right: Array<number> => {
        if (index !== povitIndex)
        num < input [povitIndex] ? left.push(num) : right.push(num);

    });
    return [...quicksort(left), input[povitIndex], ...quickSort(right)];
    };

    console.log(quickSort([2,3,4,3,4,7,8,6,5,4,3,2,-1]));

    export default quicksort;