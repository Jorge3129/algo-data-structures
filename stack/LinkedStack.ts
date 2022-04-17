import {Stack} from "./types";

class MyNode<T = any> {
    value: T;
    prev: MyNode<T> | null = null;

    constructor(value: T, prev: MyNode<T> | null) {
        this.value = value;
        this.prev = prev;
    }
}

/**
 *  In this implementation, I used a linked list
 */
class LinkedStack<T = any> implements Stack<T> {
    top: MyNode<T> | null = null;
    mySize: number = 0;

    constructor() {
    }

    push(value: T): void {
        this.mySize++;
        this.top = new MyNode<T>(value, this.top);
    }

    pop(): T | null {
        if (!this.top) return null;
        this.mySize--;
        const value = this.top.value;
        this.top = this.top.prev;
        return value;
    }

    peek(): T | null {
        if (!this.top) return null;
        return this.top.value;
    }

    size(): number {
        return 0;
    }

    isEmpty(): boolean {
        return !this.top;
    }

    getStack(): T[] {
        const result: T[] = [];
        let top = this.top;
        while (top) {
            result.unshift(top.value);
            top = top.prev;
        }
        return result;
    }
}

export default LinkedStack;

/* TESTS */
const linkedStack = new LinkedStack();
console.log(linkedStack.getStack())
linkedStack.push(1);
console.log(linkedStack.getStack())
console.log(linkedStack.pop())
console.log(linkedStack.peek())
console.log(linkedStack.pop())
