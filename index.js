class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    toString() {
        return `${this.firstname} ${this.lastname}`;
    }
}

let person = new Person('Brendan', 'Eich');

let proxyPerson = new Proxy(person, {
    get(person, propertyName) {
        console.log('Доступ к свойству ' + propertyName);
        return person[propertyName];
    },

    set(person, propertyName, value) {
        console.log('Изменение свойства ' + propertyName + ' на ' + value);
        person[propertyName] = value;
    }
});

console.log(proxyPerson.firstname);

proxyPerson.firstname = 'Bren';

console.log(proxyPerson.firstname);