// Type Alias

type Id = number;

let employeeId: Id = 2413;
let studentId: Id = 13722;

console.log(typeof employeeId);
console.log(typeof student Id);

// Generic type Parameter (Polymorphic Type Parameter)
let a = 1;

function testype<T>(input: T) {
    let var1: Any;
    let var2: T;
    var1 =input;
    var2 = input;
    var1 = 'test'
    var2 = 'test'
    console.log(var1);
    console.log(var2);
}

testype(a);

function filter<T>(input: T) {
    console.log(typeof input);
}

arr.forEach(item => filter(item));