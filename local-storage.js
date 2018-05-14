const fs = require('fs');

class LocalStorage {
    constructor() {
        if (fs.existsSync('store.json')) {
            const string = fs.readFileSync('store.json');
            this.items = JSON.parse(string);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).keys;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        fs.writeFileSync('store.json', JSON.stringify(this.items));
    }

    clear() {
        this.items = {};
        fs.unlinkSync('store.json');
    }
}