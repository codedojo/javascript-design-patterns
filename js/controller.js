export default class Controller {
    init(model, view) {
        this.model = model;
        this.model.init();
        this.view = view;
    }

    save(data) {
        this.model.set(data);

        if (this.model.isValid) {
            this.model.save();
            this.view.message = 'Пользователь создан!';
        } else {
            this.model.reset();
            this.view.message = 'Введите имя и фамилию!';
        }

        this.view.reset();
    }

    reset() {
        this.model.reset();
        this.view.reset();
    }
}