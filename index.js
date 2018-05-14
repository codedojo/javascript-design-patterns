class ComputerBuilder {
    constructor() {
        this.computer = null;
    }

    createComputer() {
        this.computer = new Computer();
    }

    getComputer() {
        return this.computer;
    }

    installInitialComponents() {
        
    }
}

class Manager {
    constructor(builder) {
        this.builder = builder;
    }

    buildComputer() {
        this.builder.createComputer();
        this.builder.installMotherboard();
        this.builder.installProcessor();
        this.builder.installMemory();
        this.builder.installVideoCard();
        this.builder.installHardDrive();
    }

    getComputer() {
        this.builder.getComputer();
    }
}

let manager = new Manager(new ComputerBuilder());

manager.buildComputer();

let computer = manager.getComputer();