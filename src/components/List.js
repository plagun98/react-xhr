import React from 'react';
import Menu from './Menu';
import AllProducts from './AllProducts';
import BabyProducts from './BabyProducts';
import SportsOutdoors from './SportsOutdoors';
import HomeKitchen from './HomeKitchen';
import HealthCare from './HealthCare';
import {Route, Switch} from 'react-router-dom';

const List = (props) => {

    return (
        <div className="container">
            <Menu/>
            <Switch>
                <Route exact path="/" render={() => <AllProducts products={props.products}/>} />
                <Route path="/babyproducts" render={() => <BabyProducts products={props.products}/>}/>
                <Route path="/sportsoutdoors" render={() => <SportsOutdoors products={props.products}/>}/>
                <Route path="/homekitchen" render={() => <HomeKitchen products={props.products}/>}/>
                <Route path="/healthcare" render={() => <HealthCare products={props.products}/>}/>
            </Switch>
        </div>
    )
}

export default List;