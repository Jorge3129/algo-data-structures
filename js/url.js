const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";

function queryObjectify(arg) {
    const params = arg.replace('%20', ' ').split('&').map(param => param.split('='))
    let result = {}
    return params.reduce((json, param) => {
        const [key, value] = param
        const props = key.split('.')
        props.reduce((obj, prop, i, {length}) => {
            if (i === length - 1) {
                obj[prop] = value
                return obj
            } else {
                if (obj[prop] === undefined) obj[prop] = {}
                return obj[prop]
            }
        }, result)
        return result
    }, {})
}

console.log(queryObjectify(inData))