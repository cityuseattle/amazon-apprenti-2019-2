const tupleA: [string] = ['Hello Tuple'];
const tupleB: [number, string, boolean] = [135, 'rgb', true];

//tupleC and tuple D are equvalent
const tupleC: [number, number, number?][] = [
    [12, 34],
    [56,78,25],
    [90, 12]
];

const tubleD: ([number, number] | [number, number, number])[] = 
[
    [12, 34],
    [56,78,25],
    [90, 12]
];

//rest elements

const bools: [boolean, ...boolean[]] = [true, true, false, true, false];

//A heterogeneous list
const info: [string, number, ...boolean[]] = ['Hello', 372, true, false, true, true];