import {Stack} from "./types";

/**
 *  In this implementation, I pretend that JS Array is a classic static array, like in Java
 */
class JavaArrayStack<T = any> implements Stack<T> {
    stack: T[] = []

    constructor(array?: T[]) {
        if (array) this.stack = array;
    }

    push(value: T): void {
        const newStack = new Array(this.stack.length + 1);
        for (let i = 0; i < this.stack.length; i++) {
            newStack[i] = this.stack[i];
        }
        newStack[newStack.length - 1] = value;
        this.stack = newStack;
    }

    pop(): T | null {
        if (this.isEmpty()) return null;
        const value = this.stack[this.stack.length - 1];
        const newStack = new Array(this.stack.length - 1);
        for (let i = 0; i < newStack.length; i++) {
            newStack[i] = this.stack[i];
        }
        this.stack = newStack;
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
