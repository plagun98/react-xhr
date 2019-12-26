import React from 'react';
import CardItem from './Card';
import {Row} from 'react-bootstrap';
import { connect } from 'react-redux';

const AllProducts = props => {

    let key = 0;

    return (
        <Row>
            {
                props.allProdStorage.items.map(product => {
                    return <CardItem key={key++} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                })
            }
        </Row>
    );
}

export default connect(
    state => ({
        allProdStorage: state
    })
)(AllProducts);