import Model from './model.js';
import View from './view.js';
import ViewModel from './view-model.js';

const model = new Model();
const viewModel = new ViewModel(model);
const view = new View(viewModel);