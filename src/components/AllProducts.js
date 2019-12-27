import React from 'react';
import CardItem from './Card';
import {Row} from 'react-bootstrap';
import { connect } from 'react-redux';

const AllProducts = props => (
    <Row>
        {
            props.allProdStorage.items.map(product => {
                let str = props.allProdStorage.searchData.toLowerCase();
                if(~product.name.toLowerCase().indexOf(str)){
                    return <CardItem key={product.asin} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                }
                return null;
            })
        }
    </Row>
);

export default connect(
    state => ({
        allProdStorage: state
    })
)(AllProducts);