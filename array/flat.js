const flat1 = (array, depth = 1) => {
    if (depth === 0) return array;
    const result = [];
    for (const el of array) {
        if (Array.isArray(el)) {
            result.push(...flat1(el, depth - 1));
        }
        else result.push(el)
    }
    return result;
}

const flat2 = (array, depth = 1) =>
    depth === 0 ? array : array.reduce((acc, val) =>
            Array.isArray(val) ? acc.concat(flat2(val, depth - 1)) : [...acc, val], [])

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
console.log(flat1(arr1));
console.log(flat2(arr1));
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
console.log(flat1(arr2, 2));
console.log(flat2(arr2, 2));
// expected output: [0, 1, 2, [3, 4]]
