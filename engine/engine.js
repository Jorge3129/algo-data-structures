function calc(obj) {
    const value = 50 * obj.x;
    return value + obj.y * obj.z;
}

calc({y: 20, z: 30, x: 10})
