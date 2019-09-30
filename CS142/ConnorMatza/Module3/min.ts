function printMin(numbers: number[])
{
    if(numbers.length === 0 )
    {
        console.log("No Min");
    }
    else
    {
        let minIndex = 0;
        for (let i = 0; i < numbers.length; i++)
        {
            if(numbers[i] < numbers[minIndex]) {
                minIndex = i;
            }

        }
        console.log("the min is " + numbers[minIndex]);
    };
}

printMin([7,5,6,3,4]);