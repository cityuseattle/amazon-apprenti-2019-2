function compare(b) {
    return function (a) { return a == b; };
}
function printEqual(functionName, equalTo) {
    var result;
    for (var i = 1; i <= 3; ++i) {
        var result_1 = equalTo(i);
        console.log(i + functionName +
            ': The two numbers are ' +
            (result_1 ? '' : 'not ') + 'equal');
    }
}
var compareTo1 = compare(1);
var compareTo3 = compare(3);
printEqual(' compare to 3', compareTo3);
printEqual(' compare to 1', compareTo1);
console.log(compare(2)(2));
console.log(compare(2)(3));
console.log(compare(3)(2));
console.log(compare(3)(3));
