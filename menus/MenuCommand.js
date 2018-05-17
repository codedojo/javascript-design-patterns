class MenuCommand {
    constructor(aciton) {
        this.action = action;
    }

    execute() {
        this.action();
    }
}