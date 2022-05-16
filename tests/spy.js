const spy = (fn) => {
    let newFn;
    newFn = function () {
        if (!newFn.calls) newFn.calls = [];
        newFn.calls.push([...arguments])
        return fn.apply(this, arguments);
    }
    return newFn;
}

const sum = (a, b) => a + b;

const spySum = spy(sum)

console.log(spySum(1, 2))
console.log(spySum(5, 7))
console.log(spySum(10, 1))
console.log(spySum.calls)