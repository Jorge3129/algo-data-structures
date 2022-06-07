class LinkedList {
    head;
    tail;

    add(item) {
        if (!this.head) {
            this.head = {item}
            this.tail = this.head
            return;
        }
        const oldTail = this.tail;
        this.tail = {item}
        oldTail.next = this.tail;
    }
}

const listToArray = (list) => {
    const res = [];
    let curr = list.head;
    while (curr) {
        res.push(curr.item)
        curr = curr.next;
    }
    return res;
}

const list = new LinkedList()
new Array(10)
    .fill(0)
    .forEach((el, i) => {
        list.add(i + 1)
    })
//console.log(JSON.stringify(list, null, 2))
console.log(listToArray(list))

//14.30-42
const reverse = (list) => {
    const newList = {}
    let curr = list.head;
    newList.tail = {item: curr.item};
    newList.head = newList.tail;
    while (curr.next) {
        newList.head = {
            item: curr.next.item,
            next: newList.head
        };
        curr = curr.next;
    }
    return newList;
}

console.log(listToArray(reverse(list)))
