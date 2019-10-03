//Named Function
function add(a: number, b: number): number
{
    return a + b;
}

//Function Expression
const multiply = function(a: number, b: number): number
{
    return a * b;
}

//Arrow Function Expression
const subtract = (a: number, b: number): number =>
{
    return a - b;
}

//Shorten Arrow Function Expression
const subtract2 = (a: number, b: number): number => a - b;

//Call the funtions
console.log(add(1, 2));
console.log(multiply(3, 4));
console.log(subtract(5, 6));
console.log(subtract2(7, 8));