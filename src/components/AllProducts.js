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
                    if(props.allProdStorage.allProdSearch){
                        let str = props.allProdStorage.searchData.toLowerCase();
                        if(~product.name.toLowerCase().indexOf(str)){
                            return <CardItem key={key++} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                        }
                    } else return <CardItem key={key++} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                    return null;
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