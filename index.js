class Component {
    constructor() {
        this.data = 'Component';
    }

    toString() {
        return this.data.toString();
    }
}

class CapsDecorator {
    constructor(component) {
        this.component = component;
    }

    toString() {
        return this.component.toString().toUpperCase();
    }
}

class HeaderDecorator {
    constructor(component) {
        this.component = component;
    }

    toString() {
        const length = this.component.toString().length;

        return ''.padStart(length, '=') + '\r\n' + this.component.toString() + '\r\n' + ''.padEnd(length, '=');
    }
}

let component = new HeaderDecorator(new Component());

console.log(component.toString());