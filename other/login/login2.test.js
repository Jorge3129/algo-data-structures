const {login} = require('./login2')
const checkLogin = require('./checkLogin')
const showError = require('./showError')

jest.mock('./checkLogin', () => jest.fn().mockName("checkLogin"))
jest.mock('./showError', () => jest.fn().mockName("showError"))

describe("login2", () => {

    const req = {body: {mail: "mail", password: "password"}}

    afterEach(() => {
        checkLogin.mockClear()
        showError.mockClear()
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

    test("should call showError with error message", () => {
        login({})
        expect(showError).toHaveBeenCalledWith(new TypeError("Cannot destructure property 'mail' of 'req.body' as it is undefined."))
    })

    test("should have the showError function return error message", () => {
        showError.mockImplementationOnce(e => 'Sorry, you have a ' + e)
        login({})
        expect(showError).toHaveReturnedWith("Sorry, you have a TypeError: Cannot destructure property 'mail' of 'req.body' as it is undefined.")
    })

})