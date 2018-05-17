class App {
    constructor() {
        this.handlers = [];
    }

    handleRequest(req, res) {
        let index = 0;

        const next = () => {
            const handler = this.handlers[index++];

            if (handler) {
                handler(req, res, next);
            } else {
                this.defaultHandler(req, res);
            }
        };

        next();
    }

    defaultHandler(req, res) {
        console.log('default');
    }

    addHandler(fn) {
        this.handlers.push(fn);
    }

    listen() {
        this.handleRequest({}, {});
    }
}

const app = new App();

app.addHandler((req, res, next) => {
    console.log('1');
    next();
});

app.addHandler((req, res, next) => {
    console.log('2');
    next();
});

app.addHandler((req, res, next) => {
    console.log('3');
    next();
});

app.listen();