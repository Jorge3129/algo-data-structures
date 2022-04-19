type Reducer<T = any, A = any> = (acc: A, val: T, i: number, array: Array<T>) => A;
type Mapper<T = any, A = any> = (val: T, i: number, array: Array<T>) => A;
type Filter<T = any> = (val: T, i: number, array: Array<T>) => any;

class MyArray<T = any> {

    array: Array<T>

    constructor(array: Array<T>) {
        this.array = array;
    }

    reduce<A = any>(reducer: Reducer<T>, init?: A) {
        let acc = init !== undefined ? init : this.array[0];
        for (let i = 0; i < this.array.length; i++) {
            if (i === 0 && init === undefined) continue;
            const elem = this.array[i];
            acc = reducer(acc, elem, i, this.array);
        }
        return acc;
    }

    map<A = any>(fn: Mapper<T, A>): A[] {
        const result: A[] = [];
        for (let i = 0; i < this.array.length; i++) {
            const elem = this.array[i];
            result.push(fn(elem, i, this.array))
        }
        return result;
    }

    filter(fn: Filter<T>) {
        const result = [];
        for (let i = 0; i < this.array.length; i++) {
            const elem = this.array[i];
            if (fn(elem, i, this.array)) result.push(elem)
        }
        return result;
    }
}

export default MyArray
