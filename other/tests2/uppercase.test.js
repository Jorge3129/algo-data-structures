const {getUpperCaseForUserName} = require('./uppercase');


describe.skip('getUpperCaseForUserName test', () => {
    test('arbitrary name', () => {
        expect(getUpperCaseForUserName("john")).toBe("JOHN");
    })

    test('name is undefined', () => {
        expect(() => getUpperCaseForUserName())
            .toThrow()
    })

    test('name is Object with method toUpperCase()', () => {
        const name = {
            toUpperCase: () => "Hello World!"
        }
        expect(getUpperCaseForUserName(name)).toBe("Hello World!")
    })

    test('3 arguments', () => {
        const name = {
            toUpperCase: () => "Hello World!"
        }
        expect(getUpperCaseForUserName(name,2,3)).toBe("Hello World!")
    })

    test('array is not instance of Array', () => {
        expect(() => getUpperCaseForUserName("Bob"))
            .toThrow(new Error('The user\'s name is Bob'))
    })
})