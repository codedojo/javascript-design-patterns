class DOM {
    static get(selector) {
        let elements = document.querySelectorAll(selector);

        if (elements.length > 1) {
            return elements;
        } else {
            return elements[0];
        }
    }

    static addClass(className, ...elements) {
        for (let element of elements) {
            element.classList.add(className);
        }
    }

    static removeClass(className, ...elements) {
        for (let element of elements) {
            element.classList.remove(className);
        }
    }

    static addEventHandler(event, handler, ...elements) {
        for (let element of elements) {
            element.addEventListener(event, handler);
        }
    }

    static removeEventHandler(event, handler, ...elements) {
        for (let element of elements) {
            element.removeEventListener(event, handler);
        }
    }
}

let buttons = DOM.get('button');

DOM.addClass('btn', buttons);
DOM.addEventHandler('click', () => console.log('Click'), buttons);