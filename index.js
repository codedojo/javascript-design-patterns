class Component {
    perform() {

    }
}

class Adapter {
    constructor() {
        this.adaptee = new Component();
    }

    do() {
        this.adaptee.perform();
    }
}

class Database {
    constructor(component) {
        component.do();
    }
}

const component = new Adapter();
const database = new Database(component);

