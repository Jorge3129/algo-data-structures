
const hasValue = (value, arr) => {
    if (arr.length === 0) {
        return 0;
    }
    return arr.includes(value);
}

module.exports = {hasValue}