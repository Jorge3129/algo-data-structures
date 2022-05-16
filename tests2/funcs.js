const hasValue = (value, arr) => {
    if(arr.length === 0) {
        return 0;
    }

    return arr.includes(value);
}

function getUpperCaseForUserName(name) {
    if (name === 'Bob') {
        throw new Error('The user\'s name is Bob');
    }

    return name.toUpperCase();
}

function findObjectProperty(prop, obj) {
    if(obj[prop]) {
        return 'Property is present in the object';
    }

    return 'Property is not present in the object';
}

function splitString(str) {
    if(string === undefined) {
        throw new Error('Invalid argument');
    }

    return str.split('');
}