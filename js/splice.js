const arr = new Array(8).fill(0).map((_, i) => i + 1)
arr.forEach((item, i, array) => {
    if (item === 5) {
        console.log('5!!!')
        array.splice(i, array.length - i)
    }
    else console.log(item)
})