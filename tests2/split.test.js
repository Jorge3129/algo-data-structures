const {splitString} = require("./split");

describe('splitString test', () => {
    test('arbitrary string', () => {
        expect(splitString("abc"))
            .toEqual(["a", "b", "c"]);
    })

    test('one symbol string', () => {
        expect(splitString("a"))
            .toEqual(["a"]);
    })

    test('empty string', () => {
        expect(splitString(""))
            .toEqual([]);
    })

    test('string is undefined', () => {
        expect(() => splitString())
            .toThrow(new Error('Invalid argument'));
    })

    test('argument is number', () => {
        expect(() => splitString(1))
            .toThrow(new Error("str.split is not a function"));
    })
})