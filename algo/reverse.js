const reverseNum = (num) => {
    const sign = Math.sign(num);
    const str = [...Math.abs(num) + ""]
        .reverse()
        .join("");
    return sign * parseInt(str);
}

const reverseNum2 = (num) => {
    const sign = Math.sign(num);
    let abs = Math.abs(num)
    let res = 0;
    while (abs) {
        const digit = abs % 10;
        res = 10 * res + digit;
        abs = Math.floor(abs / 10)
    }
    return sign * res;
}

console.log(reverseNum(-12340000))
console.log(reverseNum(-12))
console.log(reverseNum(54321))

console.log(reverseNum2(-12340000))
console.log(reverseNum2(-12))
console.log(reverseNum2(54321))
