class ListIterator {
    constructor(list) {
        this.list = list;
        this.currentIndex = 0;
    }

    next() {
        let result = { value: undefined, done: true };

        if (this.currentIndex < this.list.size) {
            result.value = this.list.get(this.currentIndex);
            result.done = false;
            this.currentIndex += 1;
        }

        return result;
    }
}

class List {
    constructor() {
        this.items = {};
    }

    get size() {
        return Object.keys(this.items).length;
    }

    add(item) {
        this.items[this.size] = item;
    }

    get(index) {
        return this.items[index];
    }

    set(index, item) {
        return this.items[index] = item;
    }

    [Symbol.iterator]() {
        return new ListIterator(this);
    }
}

let list = new List();

list.add(1);
list.add(2);
list.add(3);

for (let item of list) {
    console.log(item);
}