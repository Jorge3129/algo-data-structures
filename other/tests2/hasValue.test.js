const {hasValue} = require('./hasValue');


describe.skip('hasValue test', () => {
    test('array includes value', () => {
        expect(hasValue(1, [2, {}, "", [], 1])).toBe(true);
    })

    test('array does not include value', () => {
        expect(hasValue(3, [2, {}, "", [], 1])).toBe(false);
    })

    test('array is empty', () => {
        expect(hasValue(3, [])).toBe(0);
    })

    test('array is undefined', () => {
        expect(() => hasValue(3)).toThrowError()
    })

    test('array is not instance of Array', () => {
        expect(() => hasValue(3, {})).toThrowError()
    })
})