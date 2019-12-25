import { DATA_REQUESTED } from '../constants/action-types.js';

export function dataRequest(payload) {
	return {
		type: DATA_REQUESTED,
		payload
	};
}