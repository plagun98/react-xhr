import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    items: [],
    isLoading: false,
    errors: {}
};

export const fetchProducts = () => {
    return (dispatch, getState) => {
        dispatch({type: "PRODUCTS"})
        const fetchData = async () => {
            const result = await axios('https://demo9165932.mockable.io/products');
            dispatch({type: 'PRODUCTS_SUCCESS', payload: result.data.products})
        };
        fetchData();
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS':
          return Object.assign({}, state, {
            isLoading: true
          })
        case 'PRODUCTS_SUCCESS':
          return Object.assign({}, state, {
            isLoading: false,
            items: action.payload
          })
        case 'PRODUCTS_ERROR':
          return Object.assign({}, state, {
            isLoading: false,
            errors: action.errors
          })
        default:
          return state
        }
}
  
const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetchProducts());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
