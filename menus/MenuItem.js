class MenuItem {
    constructor() {
        this.name = name;
        this.element = document.createElement('li');
        this.element.style.display = 'none';
        this.anchor = document.createElement('a');
        this.anchor.href = '#'; // To make it clickable.
        this.element.appendChild(this.anchor);
        this.anchor.innerHTML = this.name;

        addEvent(this.anchor, 'click', function (e) { // Invoke the command on click.
            e.preventDefault();
            command.execute();
        });
    }

    add() { }

    remove() { }

    getChild() { }

    show() {
        this.element.style.display = 'block';
    }
}