class List {
    get() {

    }

    add() {

    }

    find() {

    }
}

class ListProxy {
    constructor() {
        this._list = null;
    }

    get list() {
        if (!this._list) this._list = new List();
        
        return this._list;
    }

    get() {
        return this.list.get();
    }
        
    add() {
        return this.list.add();
    }

    find() {
        return this.list.find();
    }
}

let list = new ListProxy();