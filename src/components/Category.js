import React from 'react';
import CardItem from './Card';
import {Row} from 'react-bootstrap';
import { connect } from 'react-redux';

const Category = props => {

    let key = 0;
    return (
        <Row>
            {
                props.categoryStorage.items.map(product => {
                    if(product.bsr_category === props.category) 
                        return <CardItem key={key++} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                    else return null;
                })
            }
        </Row>
    );
}

export default connect(
    state => ({
        categoryStorage: state
    })
)(Category);