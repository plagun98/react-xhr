import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from './Menu';
import AllProducts from './AllProducts';
import BabyProducts from './BabyProducts';
import {Row} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const List = () => {

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
        <div className="container">
            <Row>
                <Router history={history}>
                    <Menu/>
                    <Route path="/" render={()=>{
                        return <AllProducts products={products}/>
                    }}/>
                    <Route path="/" render={()=>{
                        return <BabyProducts products={products}/>
                    }}/>
                </Router>
            </Row>
        </div>
    )
}

export default List;