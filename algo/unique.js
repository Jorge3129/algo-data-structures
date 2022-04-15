// TASK: delete duplicate numbers in array

const array = [1, 100, 100, 3, 2, 2, 2, 2, 55, 66, 1017, 993, 1, 3, 55, 66, 1017, 993, 55, 66, 1017, 993, 1, 3, 55]

// Set

const removeDuplicatesWithSet = (array) => [...new Set(array)];

const removeDuplicatesBruteForce = (array) => array.reduce((acc, value) => acc.includes(value) ? acc : [...acc, value], [])

const removeDuplicatesWithCache = (array) => {
    const cache = [];
    const result = [];
    array.forEach(el => {
        if (cache[el]) return;
        cache[el] = true;
        result.push(el);
    })
    return result;
}

console.log(removeDuplicatesWithSet(array));
console.log(removeDuplicatesBruteForce(array));
console.log(removeDuplicatesWithCache(array))
