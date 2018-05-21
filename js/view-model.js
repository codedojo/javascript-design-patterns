import EventEmitter from './event-emitter.js';

export default class ViewModel extends EventEmitter {
    constructor(model) {
        super();

        this.model = model;
    }

    get firstname() {
        return this.model.firstname;
    }

    set firstname(value) {
        this.model.firstname = value;
    }

    get lastname() {
        return this.model.firstname;
    }

    set lastname(value) {
        this.model.lastname = value;
    }

    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    save(done) {
        if (this.model.isValid) {
            this.model.save();
            done('Пользователь создан!');
        } else {
            done('Введите имя и фамилию!');
        }
    }

    reset(done) {
        this.model.reset();
        console.log('VM.done', done);
    }
}