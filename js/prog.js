const names = [];
let input = [
    {job: "programmer", name: "Alex"},
    {job: "pilot", name: "John"},
    {job: "programmer", name: "Bob"},
]
for(const i of input) {
    if(i.job === "programmer") {
        names.push(i.name);
    }
}

const names2 = input.reduce((acc, i) =>
    i.job === "programmer" ? acc.concat(i.name) : acc, [])

const names3 = input.filter(i => i.job === "programmer")
.map(i => i.name)

console.log(names)
console.log(names2)
console.log(names3)