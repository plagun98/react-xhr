import React from 'react';
import {Link} from 'react-router-dom';
import store from '../redux/store';
import { setCategory } from '../redux/products';
import styled from 'styled-components';

const MenuWrapper = styled.ul`
    width: 100%;
    padding-left: 0;
`;
const Li = styled.li`
    width: 100%;
    padding: 10px 0;
    background-color: rgba(255,255,255,0.5);
    list-style: none;
    padding-left: 40px;
    border-bottom: 1px solid #cecece;
    border-right: 1px solid #cecece;
    &:hover{
        background: grey;
        a {
            color: #fff;
            text-decoration: none;
        }
    }
`;

const Menu = () => {
    
    return (
        <MenuWrapper>
            <Li><Link onClick={() => {store.dispatch(setCategory(""))}} to="/">All Products</Link></Li>
            <Li><Link onClick={() => {store.dispatch(setCategory("Baby Products"))}} to="/babyproducts">Baby Products</Link></Li>
            <Li><Link onClick={() => {store.dispatch(setCategory("Sports & Outdoors"))}} to="/sportsoutdoors">Sports & Outdoors</Link></Li>
            <Li><Link onClick={() => {store.dispatch(setCategory("Home & Kitchen"))}} to="/homekitchen">Home & Kitchen</Link></Li>
            <Li><Link onClick={() => {store.dispatch(setCategory("Health & Personal Care"))}} to="/healthcare">Health & Personal Care</Link></Li>
        </MenuWrapper>


    );
}

export default Menu;