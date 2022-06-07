const {PROGRAMMER} = require('./constants')

const findNames1 = (input) => {
    const names = [];
    for (const i of input) {
        if (i.job === PROGRAMMER) {
            names.push(i.name);
        }
    }
    return names;
}

module.exports = {findNames1}
