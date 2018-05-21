export default class View {
    constructor(vm) {
        this.vm = vm;

        this.init();
    }

    init() {
        this.outputElement = document.getElementById('output');
        this.firstNameInput = document.getElementById('firstname');
        this.lastNameInput = document.getElementById('lastname');
        this.messageDiv = document.getElementById('message');
        this.saveButton = document.getElementById('save');
        this.resetButton = document.getElementById('reset');
        
        this.outputElement.value = this.vm.fullname;
        this.firstNameInput.value = this.vm.firstname;
        this.lastNameInput.value = this.vm.lastname;

        this.firstNameInput.addEventListener('input', event => this.vm.firstname = this.firstNameInput.value);
        this.lastNameInput.addEventListener('input', event => this.vm.lastname = this.lastNameInput.value);

        this.saveButton.addEventListener('click', this.handleSaveButtonClick.bind(this));
        this.resetButton.addEventListener('click', this.handleResetButtonClick.bind(this));
    }

    set output(value) {
        this.outputElement.value = value;
    }

    set message(value) {
        this.messageDiv.textContent = value;
    }

    set firstname(value) {
        this.firstNameInput.value = value;
    }

    set lastname(value) {
        this.lastNameInput.value = value;
    }

    handleSaveButtonClick() {
        this.vm.save(message => {
            this.message = message;
            this.reset();
        });
    }

    handleResetButtonClick() {
        this.vm.reset(() => this.reset());
    }

    reset() {
        this.firstNameInput.value = '';
        this.lastNameInput.value = '';
        this.messageDiv.value = '';
    }
}