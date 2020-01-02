import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

describe('App container initial', () => {
    
    const appContainer = shallow(<App.WrappedComponent/>)

    it('renders properly', () => {
        expect(appContainer).toMatchSnapshot()
    })
})
