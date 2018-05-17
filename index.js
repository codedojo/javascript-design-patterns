class Stopwatch {
    constructor(onTick = () => {}) {
        this.elapsed = 0;
        this.interval = null;

        this.tick = this.tick.bind(this);
    }

    tick() {
        this.elapsed += 1;
        onTick(this.elapsed);
    }

    start() {
        this.interval = setInterval(this.tick, 1000);
    }

    pause() {
        clearInterval(this.interval);
        this.interval = null;
    }

    stop() {
        this.pause();
        this.elapsed = 0;
    }
}

class Button {
    constructor({ element = document.createElement('button'), text = ''}) {
        this.element = element;
        this.element.innerHtml = this.text;

        this.handleClick = this.handleClick.bind(this);

        this.initialize();
    }

    initialize() {
        this.element.addEventListener('click', this.handleClick);
    }

    destroy() {
        this.element.removeEventListener('click', this.handleClick);
    }

    setCommand(command) {
        this.command = command;
    }

    handleClick() {
        this.command.execute();
    }
}

class StartStopwatchCommand {
    constructor(stopwatch) {
        this.stopwatch = stopwatch;
    }

    execute() {
        this.stopwatch.reset();
        this.stopwatch.start();
    }
}

let button = new Button({ text: 'Старт' });
let stopwatch = new Stopwatch(seconds => console.log(seconds));
let startStopwatch = new StartStopwatchCommand(stopwatch);

button.setCommand(startStopwatch);
button.handleClick();