class Mediator {
    constructor() {
        this.channels = {};
    }

    subscribe(channel, handler) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }

        this.channels[channel].push(handler); 
    }

    publish(channel, ...args) {
        if (this.channels[channel]) {
            this.channels[channel].forEach(handler => handler(args));
        }
    }
}

const notificationService = new Mediator();

notificationService.subscribe('user.registered', user => console.log(user));
notificationService.publish('user.registered', { username: 'foo' });