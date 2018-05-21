export default class View {
    constructor(model, controller) {
        this.user = model;
        this.controller = controller;

        this.handleModelData = this.handleModelData.bind(this);

        this.user.on('save', this.handleModelData);
        this.user.on('init', this.handleModelData);

        this.init();
    }

    init() {
        this.firstNameInput = document.getElementById('firstname');
        this.lastNameInput = document.getElementById('lastname');
        this.messageDiv = document.getElementById('message');
        this.saveButton = document.getElementById('save');
        this.resetButton = document.getElementById('reset');

        this.saveButton.addEventListener('click', this.handleSaveButtonClick.bind(this));
        this.resetButton.addEventListener('click', this.handleResetButtonClick.bind(this));
    }

    set message(value) {
        this.messageDiv.textContent = value;
    }

    handleModelData(data) {
        this.firstNameInput.value = data.firstname;
        this.lastNameInput.value = data.lastname;
    }

    handleSaveButtonClick() {
        const data = {
            firstname: this.firstNameInput.value,
            lastname: this.lastNameInput.value
        };

        this.controller.save(data);
    }

    handleResetButtonClick() {
        this.controller.reset();
    }

    reset() {
        this.firstNameInput.value = '';
        this.lastNameInput.value = '';
        this.messageDiv.value = '';
    }
}