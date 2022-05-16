const {getUserByName, createArrayWithoutDuplicates} = require('./functions')

describe("users", () => {
    test("users contains name", () => {
        const users = [{name: 'Alex'}, {name: 'Bob'}, {name: 'Pit'}]
        expect(getUserByName(users, 'Pit')).toEqual({name: 'Pit'});
    })

    test("users doesn't contain name", () => {
        const users = [{name: 'Alex'}, {name: 'Bob'}, {name: 'Pit'}]
        expect(getUserByName(users, 'Pith')).toBeUndefined()
    })

    test("users is empty", () => {
        const users = []
        expect(getUserByName(users, 'Pith')).toBeUndefined()
    })
})

describe("arrays", () => {
    test("random arrays", () => {
        const arr1 = [3, 8, 5]
        const arr2 = [7, 8, 9]
        expect(createArrayWithoutDuplicates(arr1, arr2)).toEqual([3, 8, 5, 7, 9]);
    })

    test("empty arrays", () => {
        expect(createArrayWithoutDuplicates([], [])).toEqual([]);
    })

    test("same value arrays", () => {
        expect(createArrayWithoutDuplicates([1, 1, 1], [1, 1, 1])).toEqual([1]);
    })
})