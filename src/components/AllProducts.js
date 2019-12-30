import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CardItem from './Card';


const AllProducts = props => {
    return  (
        <Row>
            {
                props.allProdStorage.items.map(product => {
                    let str = props.location.search.slice(1).toLowerCase();
                    if(~product.name.toLowerCase().indexOf(str)) {
                        return (
                            <CardItem
                                key={product.asin}
                                name={product.name}
                                brand={product.brand}
                                price={product.price}
                                currency={product.currency}
                                asin={product.asin}
                                weight={product.weight}
                                img={product.img}
                                link={product.link}
                            />
                        )
                    }
                    return null;
                })
            }
        </Row>
    );
}

AllProducts.propTypes = {
    allProdStorage: PropTypes.shape({
        searchData: PropTypes.string,
        category: PropTypes.string,
        items: PropTypes.arrayOf(
            PropTypes.object
        )
    })
}

export default connect(
    state => ({
        allProdStorage: state
    })
)(AllProducts);