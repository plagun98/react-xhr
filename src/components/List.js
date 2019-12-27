import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import AllProducts from './AllProducts';
import Category from './Category';
import {Route, Switch} from 'react-router-dom';
import { setSearchData } from '../redux/products';
import { connect } from 'react-redux';
import styled from 'styled-components';

const InputGroup = styled.div`
    margin-top: 20px;
`;
const ColStyled = styled(Col)`
    padding: 0;
`;
const RowStyled = styled(Row)`
    max-width: 100%;
`;

const List = props => {

    return (
        <div>
            <RowStyled>
                <ColStyled md={2}>
                    <Menu/>
                </ColStyled>
                <ColStyled md={10}>
                    <div className="container">
                        <InputGroup className="input-group mb-3">
                            <input onChange={e => props.dispatch(setSearchData(e.target.value))} type="text" className="form-control" placeholder="Type here"/>
                        </InputGroup>
                    </div>
                    <Switch>
                        <Route exact path="/" render={() => <AllProducts/>} />
                        <Route path="/babyproducts" render={() => {
                            return <Category category="Baby Products"/>
                        }} />
                        <Route path="/sportsoutdoors" render={() => <Category category="Sports & Outdoors"/>} />
                        <Route path="/homekitchen" render={() => <Category category="Home & Kitchen"/>} />
                        <Route path="/healthcare" render={() => <Category category="Health & Personal Care"/>} />
                    </Switch>
                </ColStyled>
            </RowStyled>
        </div>
);
}

export default connect(
    state => ({
        listStorage: state
    })
)(List);