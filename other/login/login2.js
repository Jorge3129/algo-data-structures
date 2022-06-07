const checkLogin = require('./checkLogin')
const showError = require('./showError')


const login = (req) => {
    try {
        const {mail, password} = req.body;

        return checkLogin(mail, password);
    }
    catch(e) {
        showError(e);
    }
}

module.exports = {login}