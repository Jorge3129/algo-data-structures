export interface Stack<T = void> {
    push(value: T): void

    pop(): T | null

    peek(): T | null

    size(): number

    isEmpty(): boolean

    getStack(): T[]
}

export class Dog {
    constructor(
        public name: string,
        public age: number
    ) {
    }
}
