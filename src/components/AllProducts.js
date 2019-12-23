import React, {useState, useEffect} from 'react';
import CardItem from './Card';
import {Row} from 'react-bootstrap';

const AllProducts = props => {
        
    const [products, setProducts] = useState(null);

    let key = 0;

    useEffect(() => {
        if (props.products.length) {
            setProducts(props.products);
        }
    }, [props.products])

    return (
        <Row>
            {
                products && products.map(product => {
                    return <CardItem key={key++} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                })
            }
        </Row>
    );
}

export default AllProducts;