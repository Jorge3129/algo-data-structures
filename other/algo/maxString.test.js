const {maxString} = require('./maxString')

describe('maxString tests', () => {
    test('arbitrary array', () => {
        const arr = ["aba", "aa", "ad", "vcd", "aba"];
        const result = ["aba", "vcd", "aba"];
        expect(maxString(arr)).toEqual(result)
    })

    test('array with one element', () => {
        const arr = ["aba"];
        const result = ["aba"];
        expect(maxString(arr)).toEqual(result)
    })

    test('argument undefined', () => {
        expect(() => maxString()).toThrow(new Error("No argument provided"))
    })

    test('argument undefined', () => {
        expect(() => maxString({})).toThrow(new Error("Argument is not an array"))
    })

    test('one element is not a string', () => {
        expect(() => maxString([1])).toThrow(new Error("One of array elements is not a string"))
    })
})