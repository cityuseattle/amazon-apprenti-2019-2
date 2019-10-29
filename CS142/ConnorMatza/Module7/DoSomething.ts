export enum Instrument {
    Piano = 'Piano',
    Guitar = 'Guitar',
    Violin = 'Violin',
    Cello = 'Cello',
}

export function play(instrument: Instrument) {
    console.log('Playing ' + instrument + '.');
}

export function testMap() {
let map: {
    [name: string]: string;
} = {
    Sam: 'Professor',
}
map['Kevin'] = 'TA';
console.log(map['Sam']);
console.log(map['Kevin']);
}

export default function twoSum(nums: number[], target: number) {
    let out = [0,0]
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            map[nums[i]].push(i);
        }
        else {
            map[nums[i]] = [i];   
        }
    }
    nums.sort((a, b) => {return a - b});
    let ptr1 = 0;
    let ptr2 = nums.length - 1;

    while(ptr1 < ptr2) {
        if (nums[ptr1] + nums[ptr2] < target) {
            ptr1++;
        }
        else if (nums[ptr1] + nums[ptr2] > target) {
            ptr2--;
        }
        else {
            break;
        }
        }
    if (ptr1 === ptr2) {
        return [0,0]
    } else {
        return [map[nums[ptr1]].pop(), map[nums[ptr2]].pop()]
    }
}

export function twoSumSolution(nums: number[], target: number) {
    let map: {
        [number: string]: number;
    } = {};
    for(let i = 0; i < nums.length; ++i)
    {
        if(map[target - nums[i]] !== undefined) {
            return [map[target- nums[i]], i];
        }
        map[nums[i]] = i
    }
    return [0,0]
}
