export default class View {
    constructor(presenter) {
        this.presenter = presenter;

        this.init();
    }

    init() {
        this.outputElement = document.getElementById('output');
        this.firstNameInput = document.getElementById('firstname');
        this.lastNameInput = document.getElementById('lastname');
        this.messageDiv = document.getElementById('message');
        this.saveButton = document.getElementById('save');
        this.resetButton = document.getElementById('reset');
        
        this.outputElement.value = this.presenter.viewModel.fullname;
        this.firstNameInput.value = this.presenter.viewModel.firstname;
        this.lastNameInput.value = this.presenter.viewModel.lastname;

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
        this.presenter.save({
            firstname: this.firstNameInput.value,
            lastname: this.lastNameInput.value
        });
    }

    handleResetButtonClick() {
        this.presenter.reset();
    }

    reset() {
        this.firstNameInput.value = '';
        this.lastNameInput.value = '';
        this.messageDiv.value = '';
    }
}