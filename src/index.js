import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = [];

function reducer(state = initialState, action) {
    if (action.type === 'PRODUCTS') {
      return [
        ...state,
        action.payload
      ];
    }
    return state;
}
  
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
