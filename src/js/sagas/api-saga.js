import 'react';
import { takeEvery, call, put } from 'redux-saga/effects';
import { DATA_REQUESTED, DATA_FETCHED, API_ERROR } from '../constants/action-types.js';

export default function* watcherSaga() {
	yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
	try {
		const payload = yield call(getData);
		yield put({ type: DATA_FETCHED, payload });
	} catch (err) {
		console.error(err);
		yield put({ type: API_ERROR, payload: err });
	}
}

function getData() {
	return fetch('https://thesimpsonsquoteapi.glitch.me/quotes').then((res) => res.json());
}
