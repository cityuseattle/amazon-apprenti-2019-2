function compare(b: number)
{
    return (a: number) => a ===b;
}

function printequal(functionName: string, equalTo: function)
{
    let result: boolean;
    for(let i = 1; i <=3; ++i)
    {
        result = equalTo(i);
        console.log(i + functionName +
            ': The two numbers are' +
            (result?'':'not ') + 'equal'
            );
    }
}

const compareTo1 = compare(1);
const compareTo3 = compare(3);
printequal(' compare to 3', compareTo3);
printequal(' compare to 1', compareTo1);

console.log(compare(2)(2));
console.log(compare(2)(3));
console.log(compare(3)(2));
console.log(compare(3)(3));