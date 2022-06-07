setTimeout(() => console.log('1 setTimeout'), 0); // 1

Promise.resolve().then(() => console.log('2 Promise first')); // 2

Promise.resolve()
    .then(() => setTimeout(() => console.log('3 Promise + setTimeout')), 0); //3

setTimeout(() => console.log('4 setTimeout delay 1000'), 1000); //4

Promise.resolve()
    .then(() => console.log('5 Promise last')); //5

console.log('6 Console.log'); //6

Promise.all( //7
    [ Promise.resolve()
        .then(() => setTimeout(() => console.log('7 Promise all 1')), 0),
        Promise.resolve()
            .then(() =>  console.log('8 Promise all 2'))]
)


// 6, // 2, 5, 8, // 1, 3, 7, 4


