import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import AllProducts from './AllProducts';
import Category from './Category';
import {Route, Switch} from 'react-router-dom';
import { setSearchData, setAllProdSearch, setCategorySearch } from '../redux/products';
import { connect } from 'react-redux';
import styled from 'styled-components';

const InputGroup = styled.div`
    margin-top: 20px;
`;

const List = props => {
    console.log(props)
    const searchFilters = () => {
        if(props.listStorage.category === ""){
            props.dispatch(setAllProdSearch(true));
        } else {
            props.dispatch(setCategorySearch(true));
        }
    }

    return (
        <div>
            <Row>
                <Col md={2}>
                    <Menu/>
                </Col>
                <Col md={10}>
                    <div className="container">
                        <InputGroup className="input-group mb-3">
                            <input onChange={e => {
                                props.dispatch(setSearchData(e.target.value));
                                props.dispatch(setAllProdSearch(false));
                                props.dispatch(setCategorySearch(false));
                            }} type="text" className="form-control" placeholder="Type here"/>
                            <div className="input-group-append">
                                <button onClick = {searchFilters} className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </InputGroup>
                    </div>
                    <Switch>
                        <Route exact path="/" render={() => <AllProducts/>} />
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