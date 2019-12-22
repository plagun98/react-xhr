import React, {useState} from 'react';
import CardItem from './Card';

const AllProducts = props => {
    
const [products, setProducts] = useState(undefined);

setProducts(props);

    return (
        <div>
            {
                products.map(product => {
                    return <CardItem name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                })
            }
        </div>
        // <CardItem prodkey={props.key} name={props.product.name} brand={props.product.brand} price={props.product.price} currency={props.product.currency} asin={props.product.asin} weight={props.product.weight} img={props.product.img} link={props.product.link}/>
    );
}

export default AllProducts;