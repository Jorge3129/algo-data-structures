// asynchronous operation
function cookBurger (type) { return type }

// regular operation
function makeMilkshake (type) { return type }

// order function which returns promise
function order (type) {
    console.log("LOOOL")
    return new Promise(function(resolve, reject) {
        var burger = cookBurger(type)
        const ready = function (err, burger) {
            if (err) {
                return reject(Error('Error while cooking'))
            }
            return resolve(burger)
        }
        ready(null, burger)
    })
}

order('JakeBurger')
    .then( burger => {
        const milkshake = makeMilkshake('vanilla')
        console.log("LOL")
        return { burger: burger, shake: milkshake }
    })
    .then( foodItems => {
        console.log('BURGER PARTY !', foodItems)
    })
    .catch( err => {
        console.log(err)
    })