function printMmin(numbers: number[])
{
    if(numbers.length === 0)
    console.log('No min.');
    else
    {
        let minIndex = 0;
        for(let i = 0; i < numbers.length; i++)
        if(numbers[i] < numbers[minIndex])
        minIndex = i;
        console.log('The min is' + numbers[minIndex]);
    }
}

print([7, 5, 6, 3, 4]);