export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback);
    }

    emit(event, data) {
        if (Array.isArray(this.events[event])) {
            for (let callback of this.events[event]) {
                callback(data);
            }
        }
    }
}