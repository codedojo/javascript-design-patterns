class FormField {
    constructor(props) {
        this.props = props;
        this.element = DOM.createElement('input', props);
    }

    isValid() {
        return this.element.value !== '';
    }
}

class FormFieldDecorator {
    constructor(formField) {
        this.formField = formField;
    }

    isValid() {
        return this.formField.isValid();
    }
}

class MaxLengthFieldDecorator extends FormFieldDecorator {
    constructor(formField, maxLength = 100) {
        super(formField);

        this.maxLength = maxLength;
        this.formField.element.setAttribute('maxlenght', this.maxLength);
    }

    isValid() {
        return (this.formField.element.value.length <= this.maxLength && super.isValid())
    }
}

class AutoCompleteFieldDecorator extends FormFieldDecorator {
    constructor(formField, autocomplete = 'on') {
        super(formField);
        this.autocomplete = autocomplete;
    }

    init() {
        this.formField.setAttribute('autocomplete', this.autocomplete);
    }
}

let form = document.createElement('form');

let formField = new FormField({
    type: 'search',
    placeholder: 'Enter your search term'
});

formField = new MaxLengthFieldDecorator(formField, 255);
formField = new AutoCompleteFieldDecorator(formField, 'off');

form.appendChild(formField.createElement());

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (formField.isValid()) {
        form.submit();
    } else {
        alert('Please correct the issues in the form field.');
    }
}, false);

document.body.appendChild(form);