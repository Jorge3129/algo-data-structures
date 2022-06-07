const {foundPerson1} = require('./foundPerson1')

describe('test foundPerson1 function', () => {

    const people = [""]
    const people2 = ["Don", "John", "Kent"]
    const people3 = ["John", "Kent","Don", ]
    const people4 = ["Kent","Don", "John", ]

    test('should return empty string', () => {
        expect(foundPerson1(people)).toBe("")
    })

    test('should return "Don"', () => {
        expect(foundPerson1(people2)).toBe("Don")
    })

    test('should return "John"', () => {
        expect(foundPerson1(people3)).toBe("John")
    })

    test('should return empty "Kent"', () => {
        expect(foundPerson1(people4)).toBe("Kent")
    })

    test('should throw TypeError - cannot read props of undefined', () => {
        expect(() => foundPerson1()).toThrow("Cannot read properties of undefined (reading 'length')")
    })
})