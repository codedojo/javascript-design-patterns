function addEvent(element, event, handler) {
    if (element.addEventListener) {
        element.addEventListener(event, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent(`on${event}`, handler);
    } else {
        element[`on${event}`] = handler;
    }
}

function removeEvent(element, event, handler) {
    if (element.removeEventListener) {
        element.removeEventListener(event, handler, false);
    } else if (element.detachEvent) {
        element.detachEvent(`on${event}`, handler);
    } else {
        element[`on${event}`] = null;
    }
}

addEvent(button, 'click', event => {});