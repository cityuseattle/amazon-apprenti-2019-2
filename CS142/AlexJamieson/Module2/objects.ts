let employee: {readonly id: number, name: string} = {
    id: 377,
    name: 'kevin'
};

console.log(employee.id);
console.log(employee.name);

employee.id = 25;
employee.name = 'David';

console.log(employee.id)
console.log(employee.name);