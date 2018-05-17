class Menu {
    constructor() {
        this.name = name;
        this.items = {};
        this.element = document.createElement('li');
        this.element.innerHTML = this.name;
        this.element.style.display = 'none';
        this.container = document.createElement('ul');
        this.element.appendChild(this.container);
    }

    add(menuItemObject) {
        this.items[menuItemObject.name] = menuItemObject;
        this.container.appendChild(this.items[menuItemObject.name].getElement());
    }

    remove(name) {
        delete this.items[name];
    }

    getChild(name) {
        return this.items[name];
    }

    show() {
        this.element.style.display = 'block';
        
        for (name in this.items) { // Pass the call down the composite.
            this.items[name].show();
        }
    }
}