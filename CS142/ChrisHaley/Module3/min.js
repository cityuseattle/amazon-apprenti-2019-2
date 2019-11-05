function printMin(numbers) {
    if (numbers.length === 0)
        console.log('No min.');
    else {
        var minIndex = 0;
        for (var i = 0; i < numbers.length; i++)
            if (numbers[i] < numbers[minIndex])
                minIndex = i;
        console.log('The min is ' + numbers[minIndex]);
    }
}
printMin([7, 5, 6, 3, 4]);
