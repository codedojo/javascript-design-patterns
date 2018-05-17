class ToggleButton {
    static classes = {
        base: 'toggle-button',
        toggled: 'toggle-button--toggled'
    };

    constructor({ element, onTextContent, offTextContent, adapter }) {
        this.element = element;
        this.onTextContent = onTextContent;
        this.offTextContent = offTextContent;
        this.handleClick = () => this.toggle();
        this.adapter = adapter;

        this.init();
    }

    get toggled() {
        return this.adapter.hasClass(ToggleButton.classes.toggled);
    }

    set toggled(value) {
        this.toggle(value);
    }

    init() {
        this.adapter.addEventHandler('click', this.handleClick);
    }

    destroy() {
        this.adapter.removeEventHandler('click', this.handleClick);
    }

    toggle(isToggled = false) {
        let textContent;

        if (isToggled) {
            textContent = this.onTextContent;
            this.adapter.addClass(ToggleButton.classes.toggled);
        } else {
            textContent = this.offTextContent;
            this.adapter.removeClass(ToggleButton.classes.toggled);
        }

        this.adapter.setTextContent(textContent);
    }
}

class Component extends React.Component {
    componentDidMount() {
        this.root = new ToggleButton({
            element: document.querySelector('.toggle-button'),
            onTextContent: 'Выключить',
            offTextContent: 'Включить',
            adapter: {
                addClass: className => $(this.element).addClass(className),
                removeClass: className => {},
                hasClass: className => {},
                setTextContent: text => {},
                addEventHandler: (event, handler) => {},
                removeEventHandler: (event, handler) => {}
            }
        });
    }

    render() {
        return (
            <button ref={element => this.element = element}></button>
        );
    }
}