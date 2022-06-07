

const useState = (initState) => {
    let state = initState;
    const setState = (newState) => {
        state = newState
    }
    const getState = () => state
    return [state, setState]
}

const MyReact = (() => {
    let state;
    const useState = (initState) => {
        state = initState;
        const setState = (newState) => {
            state = newState
        }
        return [state, setState]
    }
    return {useState}
})()

const [fish, setFish] = useState('toto')
const [fish2, setFish2] = MyReact.useState('toto2')

console.log(fish)
setFish(1111)
console.log(fish)
console.log(fish2)
setFish2(1111)
console.log(fish2)

