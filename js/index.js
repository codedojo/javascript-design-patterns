import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

const model = new Model();
const controller = new Controller();
const view = new View(model, controller);

controller.init(model, view)