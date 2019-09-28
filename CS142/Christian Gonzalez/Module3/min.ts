function printMin(number: number[]) {
    if(number.length === 0 )
    console.log('No min.');
    else {
        let minIndex = 0;
        for(let i = 0; i < number.length; i++)
            if(number[i] < number[minIndex])
                minIndex = i;
        console.log('The min is ' + number[minIndex]);

    
    }
}

printMin([7, 5, 6, 3, 4]);