import React from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';

const history = createBrowserHistory();

const App = (props) => {
  return (
    <Router history={history}>
      <Main/>
    </Router>
  );
}

export default connect(
  state => ({
    productsStorage: state
  }),
  dispatch => ({})
)(App);