export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback);
    }

    emit(event, data) {
        for (let callback of this.events[event]) {
            callback(data);
        }
    }
}