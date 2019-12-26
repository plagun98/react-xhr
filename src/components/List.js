import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import AllProducts from './AllProducts';
import Category from './Category';
import {Route, Switch} from 'react-router-dom';
import { setSearchData } from '../redux/products';
import { connect } from 'react-redux';

const List = props => {

    return (
        <div>
            <Row>
                <Col md={2}>
                    <Menu/>
                </Col>
                <Col md={10}>
                    <div className="container">
                        <div className="input-group mb-3">
                            <input onChange={e => props.dispatch(setSearchData(e.target.value))} type="text" className="form-control" placeholder="Type here"/>
                            <div className="input-group-append">
                                <button  className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={AllProducts} />
                        <Route path="/babyproducts" render={() => <Category category="Baby Products"/>} />
                        <Route path="/sportsoutdoors" render={() => <Category category="Sports & Outdoors"/>} />
                        <Route path="/homekitchen" render={() => <Category category="Home & Kitchen"/>} />
                        <Route path="/healthcare" render={() => <Category category="Health & Personal Care"/>} />
                    </Switch>
                </Col>
            </Row>
        </div>

    )
}

export default connect(
    state => ({
        listStorage: state
    })
)(List);