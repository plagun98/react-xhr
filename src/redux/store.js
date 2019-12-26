import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import reducer, { watchFetchProducts, fetchProducts } from './products';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchProducts);
store.dispatch(fetchProducts());

export default store;