// Type Alias
var employeeId = 2413;
var studentId = 13722;
console.log(typeof employeeId);
console.log(typeof studentId);
// Generic type parameter (Polymorphic type parameter)
var a = 1;
function testType(input) {
    var var1;
    //let var2: T;
    var var2;
    var1 = input;
    var2 = input;
    var1 = 'test';
    var2 = 'test';
    console.log(var1);
    console.log(var2);
}
testType(a);
