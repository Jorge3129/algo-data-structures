const checkLogin = (mail, password) => {
    return !!(mail && password);
}

module.exports = checkLogin