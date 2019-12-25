import { DATA_FETCHED, API_ERROR } from "../constants/action-types";

const initialState = {
    quote: '',
    author: ''
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_FETCHED: 
            return {
                quote: action.payload[0].quote,
                author: action.payload[0].character,
            }
            break;
        case API_ERROR: 
            return {
                error: action.payload
            }
            break;
        default:
            return state;
            break;
    }
}

export default rootReducer;