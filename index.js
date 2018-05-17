class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {

    }

    unsubscribe(observer) {

    }

    notify(data) {
        for (let observer of this.observers) {
            observer.update(data);
        }
    }
}

class Observer {
    update() {

    }
}

class YouTubeChannel extends Subject {

}

class YouTubeUser extends Observer {

}

const codedojo = new YouTubeChannel();
const olegpolyakov = new YouTubeUser();

codedojo.subscribe(olegpolyakov);

codedojo.notify({ title: 'ООП в JS' });