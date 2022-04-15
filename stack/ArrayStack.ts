/**
 *  In this implementation, I used JS Array methods, which are similar to those of a stack
 */
import {Stack} from "./types";

class ArrayStack<T = void> implements Stack<T> {
    stack: T[] = []

    constructor(array?: T[]) {
        if (array) this.stack = array;
    }

    push(value: T): void {
        this.stack.push(value);
    }

    pop(): T | null {
        if (this.isEmpty()) return null;
        return this.stack.pop() || null;
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

export default ArrayStack;
