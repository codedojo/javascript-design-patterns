export default class Presenter {
    constructor(model) {
        this.model = model;
        this.model.on('save', this.updateView.bind(this));
    }

    init(view) {
        this.view = view;
    }

    get viewModel() {
        return Object.freeze({
            fullname: `${this.model.firstname} ${this.model.lastname}`,
            firstname: this.model.firstname,
            lastname: this.model.lastname
        });
    }

    updateView({ firstname, lastname }) {
        this.view.output = this.viewModel.fullname;
    }

    save(data) {
        this.model.set(data);

        if (this.model.isValid) {
            this.model.save();
            this.view.message = 'Пользователь создан!';
        } else {
            this.view.message = 'Введите имя и фамилию!';
        }

        this.view.reset();
    }

    reset() {
        this.model.reset();
        this.view.reset();
    }
}