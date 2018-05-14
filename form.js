class Form {
    constructor(method = 'GET', action) {
        this.method = method;
        this.action = action;

        this.element = document.createElement('form');
        this.element.method = method;
        this.element.action = action;
    }
}

class FormBuilder {
    constructor() {
        this.fields = [];
    }

    createForm(method, action) {
        this.form = new Form(method, action);

        return this;
    }

    addField(options) {
        let field;

        switch (options.type) {
            case 'text':
                field = new TextField(options);
                break;
            case 'email':
                field = new EmailField(options);
                break;
            case 'password':
                field = new PasswordField(options);
                break;
            default:
                throw new Error(`Invalid field type: ${type}`);
        }

        this.fields.push(field);

        return this;
    }

    getForm() {
        for (let field of this.fields) {
            this.form.element.appendChild(field.element);
        }

        return this.form.element;
    }
}

let formBuilder = new FormBuilder();

let form = formBuilder
    .createForm('POST')
    .addField({ type: 'text', name: 'username' })
    .addField({ type: 'email', name: 'email' })
    .addField({ type: 'password', name: 'password' })
    .getForm();