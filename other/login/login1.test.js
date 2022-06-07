const {login} = require('./login1')
const checkLogin = require('./checkLogin')

jest.mock('./checkLogin', () => jest.fn().mockName("checkLogin"))

describe("login1", () => {

    const req = {body: {mail: "mail", password: "password"}}

    afterEach(() => {
        checkLogin.mockClear()
    })

    test("should return the result of checkLogin", () => {
        checkLogin.mockReturnValueOnce(true);
        expect(login(req)).toBe(true)
    })

    test("should call checkLogin once", () => {
        login(req)
        expect(checkLogin).toHaveBeenCalledTimes(1)
    })

    test("should call checkLogin with mail and password", () => {
        login(req)
        expect(checkLogin).toHaveBeenCalledWith(req.body.mail, req.body.password)
    })

    test("should call checkLogin with undefined and undefined", () => {
        login({body:  {}})
        expect(checkLogin).toHaveBeenCalledWith(undefined, undefined)
    })

    test("should throw", () => {
        expect(() => login({})).toThrow(new Error("Cannot destructure property 'mail' of 'req.body' as it is undefined."))
    })

})