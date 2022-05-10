const str = "Archeology"

const maxChar = (word) => {
    const newWord = word.toLowerCase()
    const map = new Map();
    for (const ch of newWord) {
        const value = map.get(ch)
        map.set(ch, value ? value + 1 : 1)
    }
    return Array.from(map.entries())
        .reduce((acc, val) => {
            return acc[1] < val[1] ? val : acc;
        })[0]
}

const maxChar2 = (word) => {
    const newWord = word.toLowerCase()
    const map = {};
    for (const ch of newWord) {
        const value = map[ch]
        map[ch] = value ? value + 1 : 1
    }
    return Object.keys(map)
        .map(key => [key, map[key]])
        .reduce((acc, val) => {
            return acc[1] < val[1] ? val : acc;
        })[0]
}

const maxChar3 = (word) => {
    const newWord = word.toLowerCase()
    return 0;
}

console.log(maxChar2("gggfff11111ffaoaoao"))
