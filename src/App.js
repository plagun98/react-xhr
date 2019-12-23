import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <List/>
    </Router>
  );
}

export default App;
