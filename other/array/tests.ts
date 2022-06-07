import MyArray from "./Array";

const myArray = new MyArray<number>([1, 2, 3, 4, 5, 6, 7, 8]);
const objArray = new MyArray<{[key: string]: any}>([{name: "John"},{name: "Paul"},{name: "Josh"},{name: "George"}]);

const array = new MyArray<number>([1, 100, 100, 3, 2, 2, 2, 2, 55, 66, 1017, 993, 1, 3, 55, 66, 1017, 993, 55, 66, 1017, 993, 1, 3, 55])

/* TEST REDUCE */
const testReduce = () => {
    console.log(myArray.reduce((a, b) => a + b))
    console.log(myArray.reduce((a, b) => a + b, ""))
    console.log(array.reduce((acc, value) => acc.includes(value) ? acc : [...acc, value], []))
}

const testMap = () => {
    console.log(myArray.map<number>(n => n * 2))
    console.log(myArray.map<string>((n, i, {length}) => `number: ${n}, index: ${i}, length: ${length}`))
}

const testFilter = () => {
    console.log(myArray.filter(n => n * 2))
    console.log(myArray.filter((n, i) => i % 2 === 0))
    console.log(objArray.filter(n => n.name.includes("o")))
    console.log(objArray.filter(n => n.name.startsWith("J")))
}

testFilter();
