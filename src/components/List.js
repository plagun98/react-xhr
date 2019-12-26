import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import Menu from './Menu';
import AllProducts from './AllProducts';
import Category from './Category';
import {Route, Switch} from 'react-router-dom';
import { setSearchData } from '../redux/products';
import store from '../redux/store';
import styled from 'styled-components';
import { connect } from 'react-redux';

const List = props => {
    const Inputgroup = styled(InputGroup)`
        margin-top: 10px;
    `;
    return (
        <div>
            <Row>
                <Col md={2}>
                    <Menu/>
                </Col>
                <Col md={10}>
                    <div className="container">
                        <div className="input-group mb-3">
                            <input onChange={e => store.dispatch(setSearchData(e.target.value))} type="text" className="form-control" placeholder="Type here"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" render={() => <AllProducts products={props.products}/>} />
                        <Route path="/babyproducts" render={() => <Category category="Baby Products" products={props.products}/>}/>
                        <Route path="/sportsoutdoors" render={() => <Category category="Sports & Outdoors" products={props.products}/>}/>
                        <Route path="/homekitchen" render={() => <Category category="Home & Kitchen" products={props.products}/>}/>
                        <Route path="/healthcare" render={() => <Category category="Health & Personal Care" products={props.products}/>}/>
                    </Switch>
                </Col>
            </Row>
        </div>

    )
}

export default List;