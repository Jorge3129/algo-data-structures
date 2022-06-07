const {findObjectProperty} = require('./property');

const propState = {
    PRESENT: 'Property is present in the object',
    NOT_PRESENT: 'Property is not present in the object'
}

describe.skip('findObjectProperty test', () => {
    test('arbitrary string property present', () => {
        expect(findObjectProperty("name", {name: "john"}))
            .toBe(propState.PRESENT);
    })

    test('number property present', () => {
        expect(findObjectProperty(1, {1: "john"}))
            .toBe(propState.PRESENT);
    })

    test('Symbol property present', () => {
        const key = Symbol("id");
        expect(findObjectProperty(key, {[key]: "john"}))
            .toBe(propState.PRESENT);
    })

    test('property is array', () => {
        expect(findObjectProperty([], {})).toBe(propState.NOT_PRESENT)
    })

    test('arbitrary property not present', () => {
        expect(findObjectProperty("name1", {name: "john"}))
            .toBe(propState.NOT_PRESENT);
    })

    test('property present but is null', () => {
        expect(findObjectProperty("prop", {prop: null}))
            .toBe(propState.NOT_PRESENT);
    })

    test('property present but is 0', () => {
        expect(findObjectProperty("prop", {prop: 0}))
            .toBe(propState.NOT_PRESENT);
    })

    test('property present but is ""', () => {
        expect(findObjectProperty("prop", {prop: ""}))
            .toBe(propState.NOT_PRESENT);
    })

    test('property present but is false', () => {
        expect(findObjectProperty("prop", {prop: false}))
            .toBe(propState.NOT_PRESENT);
    })

    test('property present but is NaN', () => {
        expect(findObjectProperty("prop", {prop: parseInt("a")}))
            .toBe(propState.NOT_PRESENT);
    })

    test('object is undefined', () => {
        expect(() => findObjectProperty("prop"))
            .toThrow(new TypeError("Cannot read properties of undefined (reading 'prop')"))
    })
})