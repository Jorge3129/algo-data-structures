import {Stack} from "./types";

class MyNode<T = void> {
    value: T;
    prev: MyNode<T> | null = null;
    next: MyNode<T> | null = null;

    constructor(value: T, prev?: MyNode<T>, next?: MyNode<T>) {
        this.value = value;
        this.next = next || null;
        this.prev = prev || null;
    }
}

/**
 *  In this implementation, I used a doubly linked list
 */
class LinkedStack<T = void> implements Stack<T> {
    top: MyNode<T> | null = null;
    mySize: number = 0;

    constructor() {
    }

    push(value: T): void {
        this.mySize++;
        if (!this.top) {
            this.top = new MyNode<T>(value);
            return;
        }
        // now the field "next" of this.top references
        // the new object, whose field "prev" references the current top
        this.top.next = new MyNode<T>(value, this.top);
        // and now this.top references the new object, while the old one is kept
        // as the current one's "prev"
        this.top = this.top.next;
    }

    pop(): T | null {
        if (!this.top) return null;
        this.mySize--;
        const value = this.top.value;
        // shift the reference to previous object, then delete its "next" reference
        this.top = this.top.prev;
        if (this.top) this.top.next = null;
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
