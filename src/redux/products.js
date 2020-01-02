import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

const PRODUCTS = 'PRODUCTS';
const SUCCESS = 'PRODUCTS_SUCCESS';
const FETCHED = 'FETCHED_PRODUCTS';
const SEARCH_DATA = 'SEARCH_DATA';
const CATEGORY = 'CATEGORY';

export const initialState = {
    items: [],
    searchData: '',
    category: ''
};

export function* watchFetchProducts() {
    yield takeEvery(FETCHED, fetchProductsAsync);
}
  
export function* fetchProductsAsync() {
    // yield put(requestProducts());
    const result = yield call(async () => {
        return await (await axios('/products.json')).data.products;
    });
    yield put(requestProductsSuccess(result));
}

export const requestProducts = () => {
    return { type: PRODUCTS }
};
  
export const requestProductsSuccess = data => {
    return { type: SUCCESS, data }
};

export const setSearchData = setDataToSearch => {
    return { type: SEARCH_DATA, setDataToSearch }
}

export const setCategory = chosenCategory => {
    return { type: CATEGORY, chosenCategory }
}
  
export const fetchProducts = () => {
    return { type: FETCHED }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS:
            return state;
        case SUCCESS:
            return {
                ...state,
                items: action.data
            }
        case SEARCH_DATA:
            return {
                ...state,
                searchData: action.setDataToSearch
            }
        case CATEGORY:
            return{
                ...state,
                category: action.chosenCategory
            }
        default:
            return state
        }
}

export default reducer;