const {findNamesFilter} = require("./findNamesFilter");
const {PROGRAMMER} = require("./constants");

describe('test findNamesFilter function', () => {

    const input = [
        {job: "programmer", name: "Alex"},
        {job: "pilot", name: "John"},
        {job: "doctor", name: "Mike"},
        {job: "sailor", name: "Paul"},
        {job: "programmer", name: "Bob"},
    ]

    test('should choose names of programmers only', () => {
        expect(findNamesFilter(input)).toEqual(['Alex', 'Bob'])
    })

    test('should return empty array when there are no programmers', () => {
        const filtered = input.filter(i => i.job !== PROGRAMMER)
        expect(findNamesFilter(filtered)).toEqual([])
    })

    test('should return empty when elements are not objects', () => {
        const wrongInput = ['', 1, '']
        expect(findNamesFilter(wrongInput)).toEqual([])
    })

    test('should throw TypeError when input is undefined', () => {
        expect(() => findNamesFilter()).toThrow(new TypeError('Cannot read properties of undefined (reading \'filter\')'))
    })

    test('should throw TypeError ', () => {
        const wrongInput = [null]
        expect(() => findNamesFilter(wrongInput)).toThrow(new TypeError('Cannot read properties of null (reading \'job\')'))
    })

})