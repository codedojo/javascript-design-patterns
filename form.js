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

class TextField {
    constructor(props) {
        this.element = DOM.createElement('input', props);
    }
}

class EmailField {
    constructor(props) {
        this.element = DOM.createElement('input', props);
    }
}

class PasswordField {
    constructor(props) {
        this.element = DOM.createElement('input', props);
    }
}

class Form {
    static register(type, constructor) {
        Form.availableTypes[type] = constructor;
    }

    static createField(props) {
        return new Form.availableTypes[props.type](props);
    }

    constructor({ element = DOM.createElement('form') }) {
        this.element = element;
    }

    addFields(...fields) {
        for (let field in fields) {
            this.element.appendChild(field);
        }
    }
}

Form.availableTypes = {
    TEXT: 'text',
    EMAIL: 'email',
    PASSWORD: 'password'
};

DOM.Form = Form;

Form.register(Form.availableTypes.TEXT, TextField);
Form.register(Form.availableTypes.EMAIL, EmailField);
Form.register(Form.availableTypes.PASSWORD, PasswordField);

let form = new DOM.Form();

form.addFields(
    Form.createField({ type: 'text', name: 'username', placeholder: 'Имя пользователя' }),
    Form.createField({ type: 'email', onchange: event => console.log(event) }),
    Form.createField({ type: 'password' })
);