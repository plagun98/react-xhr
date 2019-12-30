import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import AllProducts from './AllProducts';
import Category from './Category';

import { setSearchData } from '../redux/products';


const InputGroup = styled.div`
    margin-top: 20px;
`;
const ColStyled = styled(Col)`
    padding: 0;
`;
const RowStyled = styled(Row)`
    max-width: 100%;
`;

const Main = props => {

    const inputHandler = e => {
        props.dispatch(setSearchData(e.target.value));
        props.history.push({
            search: '?' + e.target.value
        });
    }

    return (
        <RowStyled>
            <ColStyled md={2}>
                <Menu/>
            </ColStyled>
            <ColStyled md={10}>
                <div className="container">
                    <InputGroup className="input-group mb-3">
                        <input onChange={inputHandler} type="text" value={props.location.search.slice(1)} className="form-control" placeholder="Type here"/>
                    </InputGroup>
                </div>
                <Switch>
                    <Route exact path="/" component={AllProducts} />
                    <Route path="/babyproducts" render={props => <Category prop={props} category="Baby Products"/>} />
                    <Route path="/sportsoutdoors" render={props => <Category prop={props} category="Sports & Outdoors"/>} />
                    <Route path="/homekitchen" render={props => <Category prop={props} category="Home & Kitchen"/>} />
                    <Route path="/healthcare" render={props => <Category prop={props} category="Health & Personal Care"/>} />
                </Switch>
            </ColStyled>
        </RowStyled>
    );
}

export default connect(
    state => ({
        mainStorage: state
    })
)(withRouter(Main));