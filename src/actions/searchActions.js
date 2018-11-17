import * as types from './actionTypes';
import SearchApi from '../api/searchApi';

export function showSearchAll(searchAll) {
    return { type: types.LOAD_SEARCH_ALL_MESSAGE, searchAll }
}

export function getCustomSearchDetails(customSearchDetails) {
    return { type: types.LOAD_CUSTOM_SEARCH_MESSAGE, customSearchDetails }
}

export function getAllDetails() {
    return (dispatch) => {
        return SearchApi.getAllData().then(searchAllResponse => {
            console.log("is data reveivd  ? ",searchAllResponse);
            dispatch(showSearchAll(searchAllResponse));
        });
    }
}
export function getFilteredData() {
    return (dispatch) => {
        return SearchApi.getAllData().then(searchAllResponse => {
            console.log("is data reveivd  ? ",searchAllResponse);
            dispatch(showSearchAll(searchAllResponse));
        });
    }
}