import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index.js';
import { dataRequest } from '../actions/index.js';
import apiSaga from '../sagas/api-saga.js';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(initialiseSagaMiddleware)));

initialiseSagaMiddleware.run(apiSaga);

window.store = store;
window.dataRequest = dataRequest;

export default store;