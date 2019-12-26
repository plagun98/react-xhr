import React from 'react';
import {Link} from 'react-router-dom';
import store from '../redux/store';
import { setCategory } from '../redux/products';
import styled from 'styled-components';

const MenuWrapper = styled.ul`
    width: 100%;
    padding-top: 20px;
`;
const Li = styled.li`
    width: 100%;
    list-style: none;
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