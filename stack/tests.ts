import ArrayStack from "./ArrayStack";
import JavaArrayStack from "./JavaArrayStack";
import {Dog} from "./types";
import LinkedStack from "./LinkedStack";

console.log("\n***\nDOG STACKS\n")
const stacks = [new ArrayStack<Dog>(), new JavaArrayStack<Dog>(), new LinkedStack<Dog>()]

// PUSH

console.log("\nPUSH\n")

stacks.forEach(stack => {
    new Array(5)
        .fill(0)
        .forEach((el, i) => {
            stack.push(new Dog(`dog-${i}`, i))
        })
})

stacks.forEach(stack => {
    console.log(`${stack.constructor.name}:`);
    console.log(stack.getStack());
})

console.log("\nSIZE\n")

stacks.forEach(stack => {
    console.log(`${stack.constructor.name}:`);
    console.log(stack.size());
})

// PEEK

console.log("\nPEEK\n")

stacks.forEach(stack => {
    console.log(`${stack.constructor.name}.prototype.peek():`);
    console.log(stack.peek());
})

// POP

console.log("\nPOP\n")

stacks.forEach(stack => {
    while (!stack.isEmpty()) {
        stack.pop();
    }
})

stacks.forEach(stack => {
    console.log(`${stack.constructor.name}:`);
    console.log(stack.getStack());
})

