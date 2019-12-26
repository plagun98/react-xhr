import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';

const initialState = {
  items: [],
  isLoading: false,
  errors: {}
};

const sagaMiddleware = createSagaMiddleware();

const PRODUCTS = 'PRODUCTS';
const SUCCESS = 'PRODUCTS_SUCCESS';
const ERROR = 'PRODUCTS_ERROR';

const requestProducts = () => {
  return { type: PRODUCTS }
};

const requestProductsSuccess = (data) => {
  return { type: SUCCESS, payload: data }
};

const requestProductsError = () => {
  return { type: ERROR }
};

const fetchProducts = () => {
  return { type: 'FETCHED_PRODUCTS' }
};

function* watchFetchProducts() {
  yield takeEvery('FETCHED_PRODUCTS', fetchProductsAsync);
}

function* fetchProductsAsync() {
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

export const reducer = (state = initialState, action) => {
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
  
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchProducts);
store.dispatch(fetchProducts());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
