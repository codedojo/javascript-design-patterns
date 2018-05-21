import EventEmitter from './event-emitter.js';

export default class Model extends EventEmitter {
    constructor(firstname = '', lastname = '') {
        super();

        this.firstname = firstname;
        this.lastname = lastname; 
    }

    get data() {
        return { firstname: this.firstname, lastname: this.lastname };
    }

    get isValid() {
        return this.firstname && this.lastname;
    }

    set({ firstname, lastname }) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    reset() {
        this.firstname = '';
        this.lastname = '';
    }

    save() {
        console.log('Пользователь сохранен!', this);
        this.emit('save', this.data);
    }
}