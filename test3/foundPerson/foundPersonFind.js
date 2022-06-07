function foundPersonFind(people) {
    const names = ["Don", "John", "Kent"]
    return people.find(p => names.includes(p)) || ""
}

module.exports = {foundPersonFind}