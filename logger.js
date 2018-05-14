const path = require('path');
const fs = require('fs');

class Logger {
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    constructor(filename) {
        if (!Logger.instance) {
            this.filename = filename;
            Logger.instance = this;
        }

        return Logger.instance;
    }

    read() {
        return fs.readFileSync(this.filename, 'utf-8');
    }

    write(content) {
        fs.appendFileSync(this.filename, content);
    }
}

let logger = new Logger('log.txt');

logger.write('hello');