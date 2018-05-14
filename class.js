class Singleton {
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }
}

const instance = Singleton.getInstance();