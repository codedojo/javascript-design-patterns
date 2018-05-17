class Binder {
    static bindTo(sourceObject, sourceProperty, targetObject, targetProperty) {
        let bindHandler = {
            set(target, property, newValue) {
                if (property == sourceProperty) {
                    target[sourceProperty] = newValue;
                    targetObject[targetProperty] = newValue;
                }
            }
        };

        return new Proxy(sourceObject, bindHandler);
    }
}

let person = {
    name: 'Brendan'
};

let input = document.getElementById('name');

let proxy = Binder.bindTo(person, 'name', input, 'value');

