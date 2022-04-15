import {Stack} from "./types";

/**
 *  In this implementation, I pretend that JS Array is a classic static array, like in Java
 */
class JavaArrayStack<T = void> implements Stack<T> {
    stack: T[] = []

    constructor(array?: T[]) {
        if (array) this.stack = array;
    }

    push(value: T): void {
        const newStack = new Array(this.stack.length + 1);  // create new array with incremented length
        for (let i = 0; i < this.stack.length; i++) {                 // copy all elements from the old array
            newStack[i] = this.stack[i];
        }
        newStack[newStack.length - 1] = value;                        // add our value at the last index
        this.stack = newStack;                                        // assign new array to the class field
    }

    pop(): T | null {
        if (this.isEmpty()) return null;
        const value = this.stack[this.stack.length - 1];              // get the value at last index
        const newStack = new Array(this.stack.length - 1);  // create new array with decremented length
        for (let i = 0; i < newStack.length; i++) {                   // copy all but last elements from the old array
            newStack[i] = this.stack[i];
        }
        this.stack = newStack;                                        // assign new array to the class field
        return value;
    }

    peek(): T | null {
        if (this.isEmpty()) return null;
        return this.stack[this.stack.length - 1];
    }

    size(): number {
        return this.stack.length;
    }

    isEmpty(): boolean {
        return !this.stack.length;
    }

    getStack(): T[] {
        return this.stack;
    }
}

export default JavaArrayStack;
