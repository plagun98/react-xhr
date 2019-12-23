import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.ul`
    width: 100%;
    display: flex;
    padding-top: 20px;
`;
const Li = styled.li`
    width: 100%;
    list-style: none;
`;

const Menu = () => {

    return (
        <MenuWrapper>
            <Li><Link to="/">Reset filters </Link></Li>
            <Li><Link to="/babyproducts">Baby Products</Link></Li>
            <Li><Link to="/sportsoutdoors">Sports & Outdoors</Link></Li>
            <Li><Link to="/homekitchen">Home & Kitchen</Link></Li>
            <Li><Link to="/healthcare">Health & Personal Care</Link></Li>
        </MenuWrapper>


    );
}

export default Menu;