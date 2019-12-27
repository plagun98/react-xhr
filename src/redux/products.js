import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

const PRODUCTS = 'PRODUCTS';
const SUCCESS = 'PRODUCTS_SUCCESS';
const ERROR = 'PRODUCTS_ERROR';
const FETCHED = 'FETCHED_PRODUCTS';
const SEARCH_DATA = 'SEARCH_DATA';
const CATEGORY = 'CATEGORY';
const ALL_PROD_SEARCH = 'ALL_PROD_SEARCH';
const CATEGORY_SEARCH = 'CATEGORY_SEARCH';

export const initialState = {
    items: [],
    searchData: '',
    category: '',
    allProdSearch: false,
    categorySearch: false,
    isLoading: false,
    errors: {}
};

export function* watchFetchProducts() {
    yield takeEvery(FETCHED, fetchProductsAsync);
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
    return { type: SUCCESS, data }
};
    
const requestProductsError = () => {
    return { type: ERROR }
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

export const setAllProdSearch = allProdSearch => {
    return { type: ALL_PROD_SEARCH, allProdSearch }
}

export const setCategorySearch = categorySearch => {
    return { type: CATEGORY_SEARCH, categorySearch }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS:
                return Object.assign({}, state, {
                isLoading: true
            })
        case SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                items: action.data
            })
        case ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                errors: action.errors
            })
        case SEARCH_DATA:
            return Object.assign({}, state, {
                isLoading: false,
                searchData: action.setDataToSearch
            })
        case CATEGORY:
            return Object.assign({}, state, {
                isLoading: false,
                category: action.chosenCategory
            })
        case ALL_PROD_SEARCH:
            return Object.assign({}, state, {
                isLoading: false,
                allProdSearch: action.allProdSearch
            })
        case CATEGORY_SEARCH:
            return Object.assign({}, state, {
                isLoading: false,
                categorySearch: action.categorySearch
            })
        default:
            return state
        }
}

export default reducer;