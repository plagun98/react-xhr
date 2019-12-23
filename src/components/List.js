import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from './Menu';
import AllProducts from './AllProducts';
import BabyProducts from './BabyProducts';
import SportsOutdoors from './SportsOutdoors';
import HomeKitchen from './HomeKitchen';
import HealthCare from './HealthCare';
import {Route, Switch} from 'react-router-dom';

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
            <Menu/>
            <Switch>
                <Route exact path="/" render={() => <AllProducts products={products}/>} />
                <Route path="/babyproducts" render={() => <BabyProducts products={products}/>}/>
                <Route path="/sportsoutdoors" render={() => <SportsOutdoors products={products}/>}/>
                <Route path="/homekitchen" render={() => <HomeKitchen products={products}/>}/>
                <Route path="/healthcare" render={() => <HealthCare products={products}/>}/>
            </Switch>
        </div>
    )
}

export default List;