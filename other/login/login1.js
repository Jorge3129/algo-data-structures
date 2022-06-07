const checkLogin = require('./checkLogin')

const login = (req) => {
    // req.body
    // body  = {mail, password}

    const {mail, password} = req.body;

    return checkLogin(mail, password);
}

module.exports = {login, checkLogin}