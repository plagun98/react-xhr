import React from 'react';
import CardItem from './Card';
import {Row} from 'react-bootstrap';
import { connect } from 'react-redux';

const Category = props => (
    <Row>
        {
            props.categoryStorage.items.map(product => {
                if(product.bsr_category === props.category){
                    let str = props.categoryStorage.searchData.toLowerCase();
                    if(~product.name.toLowerCase().indexOf(str)){
                        return <CardItem key={product.asin} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                    }
                }
                return null;
            })
        }
    </Row>
);

export default connect(
    state => ({
        categoryStorage: state
    })
)(Category);