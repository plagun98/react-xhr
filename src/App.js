import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

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