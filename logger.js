const LOG_LEVEL = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR'
};

class LogFormatter {
    constructor(logLevel) {
        this.logLevel = logLevel;
        this.nextInChain = null;
    }

    setNextInChain(next) {
        this.nextInChain = next;
    }

    createLogMessage(message, logLevel) {
        let returnValue;
        
        if (this.logLevel === logLevel) {
            if (logLevel === LOG_LEVEL.ERROR) {
                returnValue = logLevel + ": " + message.toUpperCase();
            } else if (logLevel === LOG_LEVEL.WARN) {
                returnValue = logLevel + ": " + message;
            } else {
                returnValue = message;
            }
        } else if (this.nextInChain) {
            returnValue = this.nextInChain.createLogMessage(message, logLevel);
        }

        return returnValue;
    }
}

class Logger {
    constructor() {
        this.logs = [];
        this.formatter = null;

        this.initialize();
    }

    initialize() {
        let infoFormatter = new LogFormatter(LOG_LEVEL.INFO);
        let warnFormatter = new LogFormatter(LOG_LEVEL.WARN);
        let errorFormatter = new LogFormatter(LOG_LEVEL.ERROR);

        errorFormatter.setNextInChain(warnFormatter);
        warnFormatter.setNextInChain(infoFormatter);

        this.formatter = errorFormatter;
    }

    toString() {
        return this.logs.join('\n');
    }

    log(message, logLevel) {
        let logMessage = this.formatter.createLogMessage(message, logLevel);
        
        this.logs.push(logMessage);
    }
}

let logger = new Logger();

logger.log('Хьюстон, у нас проблема', LOG_LEVEL.ERROR);
logger.log('Что-то случилось', LOG_LEVEL.WARN);
logger.log('Что-то произошло', LOG_LEVEL.INFO);

console.log(logger.toString());