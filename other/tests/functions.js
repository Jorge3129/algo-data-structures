function getUserByName(users, name) {
    return users.find(user => user.name === name)
}

function createArrayWithoutDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]
}

module.exports = {getUserByName, createArrayWithoutDuplicates}