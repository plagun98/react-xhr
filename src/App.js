import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { connect } from 'react-redux';

const history = createBrowserHistory();

const App = (props) => {

  const [products, setProducts] = useState([]);
  const url = 'https://demo9165932.mockable.io/products';

  useEffect(() => {

      const fetchData = async () => {
          const result = await axios(url);
          setProducts(result.data.products);
      };
      fetchData();

  }, [url]);

  return (
    <Router history={history}>
      <List products={products}/>
    </Router>
  );
}

export default connect(
  state => ({
    productsStorage: state
  }),
  dispatch => ({})
)(App);