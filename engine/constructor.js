
console.log(new Date())
console.log(Date())

console.log(new Boolean(0))
console.log(Boolean(0))

function Item () {
    this.prop = "value"
    return "Hello, world!"
}

function Item2 () {
    this.prop = "value2"
    return {name: "John"}
}

console.log(new Item())
console.log(Item())
console.log(new Item2())
console.log(Item2())



const flat = (arr, depth = 1) => depth === 0 ? arr :
    arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flat(val, depth - 1)) : [...acc, val], [])