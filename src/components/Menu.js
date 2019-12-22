import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {

    return (
        <div>
            <Link to="/">Reset filters </Link>
            <Link to="/babyproducts">Baby Products</Link>
            {/* <Link onClick={setSportsOutdoors}>Sports & Outdoors</Link>
            <Link onClick={setHomeKitchen}>Home & Kitchen</Link>
            <Link onClick={setHealthCare}>Health & Personal Care</Link> */}
        </div>


    );
}

export default Menu;