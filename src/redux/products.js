import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

const PRODUCTS = 'PRODUCTS';
const SUCCESS = 'PRODUCTS_SUCCESS';
const ERROR = 'PRODUCTS_ERROR';
const FETCHED = 'FETCHED_PRODUCTS';

export const initialState = {
    items: [],
    search: '',
    category: '',
    isLoading: false,
    errors: {}
};

export function* watchFetchProducts() {
    yield takeEvery('FETCHED_PRODUCTS', fetchProductsAsync);
}
  
export function* fetchProductsAsync() {
    try {
        yield put(requestProducts());
        const result = yield call(async () => {
        return await axios('/products.json');
        });
        yield put(requestProductsSuccess(result.data.products));
    } catch (error) {
        yield put(requestProductsError());
    }
}

const requestProducts = () => {
    return { type: PRODUCTS }
};
  
const requestProductsSuccess = (data) => {
    return { type: SUCCESS, payload: data }
};
    
const requestProductsError = () => {
    return { type: ERROR }
};
  
export const fetchProducts = () => {
    return { type: FETCHED }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS:
                return Object.assign({}, state, {
                isLoading: true
            })
        case SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                items: action.payload
            })
        case ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                errors: action.errors
            })
        default:
            return state
        }
}

export default reducer;