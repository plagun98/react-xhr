import React from 'react';
import {NavLink} from 'react-router-dom';
import store from '../redux/store';
import { setCategory } from '../redux/products';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const MenuWrapper = styled.ul`
    width: 100%;
    padding-left: 0;
`;
const LinkStyled = styled(NavLink)`
    a{
        width: 100%;
        height: 100%;
    }    

`;
const Li = styled.li`
    width: 100%;
    background-color: rgba(255,255,255,0.5);
    list-style: none;
    border-bottom: 1px solid #cecece;
    border-right: 1px solid #cecece;
    a{
        display: block;
        text-decoration: none;
        padding: 10px 0;
        padding-left: 40px;
    }
    &:hover{
        background: rgba(0, 0, 0, 0.2);
        a {
            color: #fff;
        }
    }
    .active{
        background: grey;
        color: #fff;
    }
`;

const Menu = props => {

    return (
        <MenuWrapper>
            <Li><LinkStyled onClick={() => {store.dispatch(setCategory(""))}} exact to="/" activeClassName="active">All Products</LinkStyled></Li>
            <Li><LinkStyled onClick={() => {store.dispatch(setCategory("Baby Products"))}} to={"/babyproducts"}>Baby Products</LinkStyled></Li>
            <Li><LinkStyled onClick={() => {store.dispatch(setCategory("Sports & Outdoors"))}} to="/sportsoutdoors">Sports & Outdoors</LinkStyled></Li>
            <Li><LinkStyled onClick={() => {store.dispatch(setCategory("Home & Kitchen"))}} to="/homekitchen">Home & Kitchen</LinkStyled></Li>
            <Li><LinkStyled onClick={() => {store.dispatch(setCategory("Health & Personal Care"))}} to="/healthcare">Health & Personal Care</LinkStyled></Li>
        </MenuWrapper>
    );
}

export default withRouter(Menu);