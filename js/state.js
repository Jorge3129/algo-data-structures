const useState = (initState) => {
    let state = initState;
    const setState = (newState) => {
        state = newState
    }
    const getState = () => state
    return [state, setState]
}

const useState2 = (initState) => {
    let state = initState;
    const setState = (newState) => {
        state = newState
    }
    const getState = () => state
    const result = {state, setState}
    return {state: result}
}

const [fish, setFish] = useState('toto')
const {state} = useState2('toto2')

console.log(fish)
setFish(1111)
console.log(fish)

console.log(state.state)
state.setState(1111)
console.log(state.state)