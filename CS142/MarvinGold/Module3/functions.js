//Name Function
function add(a, b) {
    return a + b;
}
//Function Expresion
var multiply = function (a, b) {
    return a * b;
};
//Arrow function expression
var subtract = function (a, b) {
    return a - b;
};
// Shorten array function
var subtract2 = function (a, b) { return a - b; };
//call the functions
console.log(add(1, 2));
console.log(multiply(3, 4));
console.log(subtract(5, 6));
console.log(subtract2(7, 8));
