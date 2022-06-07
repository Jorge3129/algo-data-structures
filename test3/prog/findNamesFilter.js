const {PROGRAMMER} = require('./constants')

const findNamesFilter = (input) => input
    .filter(i => i.job === PROGRAMMER)
    .map(i => i.name)

module.exports = {findNamesFilter}