const {PROGRAMMER} = require('./constants')

const findNamesReduce = (input) => input.reduce((acc, i) =>
    i.job === PROGRAMMER ? acc.concat(i.name) : acc, [])

module.exports = {findNamesReduce}