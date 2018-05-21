import Model from './model.js';
import View from './view.js';
import Presenter from './presenter.js';

const model = new Model();
const presenter = new Presenter(model);
const view = new View(presenter);
presenter.init(view);
