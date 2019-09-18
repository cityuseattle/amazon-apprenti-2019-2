const a = [1, 2, 3];
let b: string[] = ['foo', 'bar'];
var c = [1,"bird"];
// c.push(true);

let d = [];
d.push(3);
d.push('abc');

let e: number[] = [];
e.push(1);
// e.push('b');

let f = [5];
f.push(7);
// f.push('newString');

console.log(a[2]);
console.log(b[0]);
console.log(c[1]);

const g: number [][] = [
    [10, 21, 32],
    [43, 54, 65],
    [76, 87, 98],
    [12, 23, 34],
];

console.log(g[2][1]);
