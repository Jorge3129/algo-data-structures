const {foundPersonFind} = require('./foundPersonFind')

describe('test foundPersonFind function', () => {

    const people = [""]
    const people2 = ["Don", "John", "Kent"]
    const people3 = ["John", "Kent","Don", ]
    const people4 = ["Kent","Don", "John", ]

    test('should return empty string', () => {
        expect(foundPersonFind(people)).toBe("")
    })

    test('should return "Don"', () => {
        expect(foundPersonFind(people2)).toBe("Don")
    })

    test('should return "John"', () => {
        expect(foundPersonFind(people3)).toBe("John")
    })

    test('should return empty "Kent"', () => {
        expect(foundPersonFind(people4)).toBe("Kent")
    })

    test('should throw TypeError - cannot read props of undefined', () => {
        expect(() => foundPersonFind()).toThrow("Cannot read properties of undefined (reading 'find')")
    })
})