const fObj = () => {
    const val = {a: 1, b: [1,2]}
    return [val, () => val]
}

const [obj, getObj] = fObj()
console.log(obj, getObj())
obj.a = 2;
obj.b = [];
console.log(obj, getObj())