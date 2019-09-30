const tupleA: [string] = ['Hello Tuple'];
const tupleB: [number, string, boolean] = [135, 'rgb', true];

// tuplC and tupleD are quivialent 
const tupleC: [number, number, number?][] = [
    [12, 34],
    [56, 78, 25],
    [90, 12]
];
const tupleD: ([number, number] | [number, number, number])[] = [
    [12, 34],
    [56, 78, 25],
    [90, 12]
];
// Rest elements
const bools: [boolean, ...boolean[]] = [true, true, false, true, false];

// A heterogenues list
const info: [string, number, ...boolean[]] = ['Hello', 372, true, true, false, true, true];
