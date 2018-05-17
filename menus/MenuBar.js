class MenuBar {
    constructor() {
        this.menus = new Map();
    }

    init() {
        this.elemenet = document.createElement('ul');
        this.elemenet.className = 'menu-bar';
    }

    add(menu) {
        this.menus.set(menu.name, menu);
        this.element.appendChild(menu.element);
    }

    remove(name) {
        this.menus.delete(name);
    }

    getMenu(name) {
        return this.menus.get(name);
    }

    show() {
        this.elemenet.classList.add('open');

        this.menus.forEach(menu => menu.show());
    }
}