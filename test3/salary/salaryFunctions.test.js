const {countYoungestAge, countTotalSalary, printAgeAndSalary} = require('./salaryFunctions')

describe('test salary functions', () => {

    const people = [
        {age: 20, salary: 1000},
        {age: 40, salary: 800},
        {age: 18, salary: 400},
        {age: 15, salary: 100},
    ]

    describe('test countYoungestAge function', () => {

        test('should return minimal age (15)', () => {
            expect(countYoungestAge(people)).toBe(15)
        })

        test('should return Infinity when people is empty', () => {
            expect(countYoungestAge([])).toBe(Infinity)
        })

        test('should throw TypeError', () => {
            expect(() => countYoungestAge([null]))
                .toThrow(new TypeError('Cannot read properties of null (reading \'age\')'))
        })

    })

    describe('test countTotalSalary function', () => {

        test('should return sum of salaries (2300)', () => {
            expect(countTotalSalary(people)).toBe(2300)
        })

        test('should return 0 when people is empty', () => {
            expect(countTotalSalary([])).toBe(0)
        })

        test('should return a NaN when receiving array of strings', () => {
            expect(countTotalSalary(['hello', 'world', 123])).toBeNaN()
        })

        test('should throw TypeError', () => {
            expect(() => countTotalSalary([null]))
                .toThrow(new TypeError('Cannot read properties of null (reading \'salary\')'))
        })

    })

    describe('test printAgeAndSalary function', () => {

        test('should return "youngestAge: 15, totalSalary: 2300"', () => {
            expect(printAgeAndSalary(15, 2300)).toBe('youngestAge: 15, totalSalary: 2300')
        })

        test('should return "youngestAge: undefined, totalSalary: undefined" when 0 arguments', () => {
            expect(printAgeAndSalary()).toBe('youngestAge: undefined, totalSalary: undefined')
        })
    })
})