import reducer, { initialState } from './products';
import { put, takeEvery } from 'redux-saga/effects';
import * as t from './products';

describe('saga', () => {

    it('test watchFetchProducts', () => {
        const generator = t.watchFetchProducts();
        expect(generator.next().value).toEqual(takeEvery('FETCHED_PRODUCTS', t.fetchProductsAsync));
        expect(generator.next().done).toBeTruthy();
    })
  
  
      it('test fetchProductsAsync', () => {
        const mockResponse = { products: [1,2,3] }; 
        const generator = t.fetchProductsAsync();
        
        expect(generator.next().value.type).toEqual('CALL');
        expect(generator.next(mockResponse).value).toEqual(put({ type: 'PRODUCTS_SUCCESS' , data: { products: [1,2,3] }}));
        expect(generator.next().done).toBeTruthy()
      })

});

describe('action creators', () => {

    it('download items', () => {
        expect(t.requestProducts()).toEqual({ type: 'PRODUCTS'});
    });

    it('set items', () => {
        expect(t.requestProductsSuccess('test data')).toEqual({ type: 'PRODUCTS_SUCCESS', data: 'test data' });
    });

    it('set category', () => {
        expect(t.setCategory('test category')).toEqual({ type: 'CATEGORY', chosenCategory: 'test category' });
    });
  
    it('set searchData', () => {
        expect(t.setSearchData('test searchData')).toEqual({ type: 'SEARCH_DATA', setDataToSearch: 'test searchData' });
    });

});

describe('reducer', () => {

    it('set products', () => {

        const actionType = {
            type: 'PRODUCTS_SUCCESS',
            data: [1,2,3]
        };
        
        expect(reducer(initialState, actionType)).toStrictEqual({ ...initialState, items: [1,2,3] });
    });

    it('set category', () => {

        const actionType = {
            type: 'CATEGORY',
            chosenCategory: 'test category'
        };
        
        expect(reducer(initialState, actionType)).toStrictEqual({ ...initialState, category: 'test category' });
    });

    it('set searchData', () => {

        const actionType = {
            type: 'SEARCH_DATA',
            setDataToSearch: 'keyword'
        };
        
        expect(reducer(initialState, actionType)).toStrictEqual({ ...initialState, searchData: 'keyword' });
    });
})