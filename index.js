class DOM {
    static createElement(type, props, ...children) {
        const element = document.createElement(type);

        Object.keys(props).forEach(key => element[key] = props[key]);

        children.forEach(child => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }

            element.appendChild(child);
        });

        return element;
    }

    static createFactory(type) {
        return DOM.createElement.bind(null, type);
    }
}

DOM.Form = class Form {
    static createField(type = 'text') {
        let field;

        switch (type) {
            case 'text':
                field = new TextField();
                break;
            case 'email':
                field = new EmaiField();
                break;
            case 'password':
                field = new PasswordField();
                break;
        }

        return field;
    }
};

let div = DOM.createElement('toolbar', { className: 'card' });
let createDiv = DOM.createFactory('div');

let div = createDiv();