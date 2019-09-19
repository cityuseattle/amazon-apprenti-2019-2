type Id = number;

let employeeId: Id = 2413;
let studentId: Id = 13722;

console.log(typeof employeeId);
console.log(typeof studentId);

let arr = [
    'E line',
    14,
    true
];

function filter<T>(input: T) {
    console.log(typeof input);
    let var1: any;
    let var2: T;
    var1 = input;
    var2 = input;
    var1 = 'test';
    var2 = 'test';
    console.log(var1);
    console.log(var2);
}

testType(a);

arr.forEach(item => filter(item));