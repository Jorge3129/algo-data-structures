const reverseNum = (num) => {
    const sign = Math.sign(num);
    const str = [...Math.abs(num) + ""]
        .reverse()
        .join("");
    return sign * parseInt(str);
}

console.log(reverseNum(-12340000))
console.log(reverseNum(-12))
console.log(reverseNum(54321))
