import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';

const store = createStore(rootReducer);

store = window.store;

export default store;