//Name Function

function add(a: number, b: number): number{
    return a + b;

}

//Function Expresion
const multiply = function(a: number, b: number): number
{
    return a * b;
}

//Arrow function expression
const subtract = (a: number, b: number): number =>
{
    return a - b;
}

// Shorten array function

const subtract2 = (a: number, b: number): number => a - b;

//call the functions
console.log(add(1,2));
console.log(multiply(3, 4));
console.log(subtract(5, 6));
console.log(subtract2(7,8));
