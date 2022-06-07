const {findNamesReduce} = require("./findNamesReduce");
const {PROGRAMMER} = require("./constants");

describe('test findNamesReduce function', () => {

    const input = [
        {job: "programmer", name: "Alex"},
        {job: "pilot", name: "John"},
        {job: "doctor", name: "Mike"},
        {job: "sailor", name: "Paul"},
        {job: "programmer", name: "Bob"},
    ]

    test('should choose names of programmers only', () => {
        expect(findNamesReduce(input)).toEqual(['Alex', 'Bob'])
    })

    test('should return empty array when there are no programmers', () => {
        const filtered = input.filter(i => i.job !== PROGRAMMER)
        expect(findNamesReduce(filtered)).toEqual([])
    })

    test('should return empty when elements are not objects', () => {
        const wrongInput = ['', 1, '']
        expect(findNamesReduce(wrongInput)).toEqual([])
    })

    test('should throw TypeError when input is undefined', () => {
        expect(() => findNamesReduce()).toThrow(new TypeError('Cannot read properties of undefined (reading \'reduce\')'))
    })

    test('should throw TypeError ', () => {
        const wrongInput = [null]
        expect(() => findNamesReduce(wrongInput)).toThrow(new TypeError('Cannot read properties of null (reading \'job\')'))
    })

})