const {findNames1} = require("./findNames1")
const {PROGRAMMER} = require('./constants')


describe('test findNames1 function', () => {

    const input = [
        {job: "programmer", name: "Alex"},
        {job: "pilot", name: "John"},
        {job: "doctor", name: "Mike"},
        {job: "sailor", name: "Paul"},
        {job: "programmer", name: "Bob"},
    ]

    test('should choose names of programmers only', () => {
        expect(findNames1(input)).toEqual(['Alex', 'Bob'])
    })

    test('should return empty array when there are no programmers', () => {
        const filtered = input.filter(i => i.job !== PROGRAMMER)
        expect(findNames1(filtered)).toEqual([])
    })

    test('should return empty when elements are not objects', () => {
        const wrongInput = ['', 1, '']
        expect(findNames1(wrongInput)).toEqual([])
    })

    test('should throw TypeError when input is undefined', () => {
        expect(() => findNames1()).toThrow(new TypeError('input is not iterable'))
    })

    test('should throw TypeError ', () => {
        const wrongInput = [null]
        expect(() => findNames1(wrongInput)).toThrow(new TypeError('Cannot read properties of null (reading \'job\')'))
    })

})