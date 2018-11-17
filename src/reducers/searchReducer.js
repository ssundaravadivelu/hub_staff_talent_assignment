import * as types from '../actions/actionTypes';

export default function searchReducer(state={}, action) {
    switch (action.type) {
        case types.LOAD_SEARCH_ALL_MESSAGE:
            return Object.assign({}, state, action);
        case types.LOAD_CUSTOM_SEARCH_MESSAGE:
            return Object.assign({}, state, action.customSearchDetails);
        default:
            return state;
    }
}