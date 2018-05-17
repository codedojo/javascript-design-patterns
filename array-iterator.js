class ArrayIterator {
    constructor(array = []) {
        this.array = array;
        this.index = 0;
    }

    current() {
        return this.array[this.index];
    }

    hasNext() {
        return this.index < this.items.length - 1;
    }

    next() {
        if (this.hasNext()) {
            this.index += 1;
        }

        return this.current();
    }

    prev() {
        if (this.index > 0) {
            this.index -= 1;
        }

        return this.current();
    }

    first() {
        return this.array[0];
    }

    last() {
        return this.array[this.array.length - 1];
    }
}

