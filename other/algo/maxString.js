
const maxString = (array) => {
    if (array === undefined) throw new Error("No argument provided")
    if (!Array.isArray(array)) throw new Error("Argument is not an array")

    const maxLength = array.reduce((max, str) => {
        if (typeof str !== "string") throw new Error("One of array elements is not a string")
        return str.length > max ? str.length : max
    }, 0)

    return array.filter(str => str.length === maxLength)
}

module.exports = {maxString}