import React, {useState} from 'react';
import CardItem from './Card';

const BabyProducts = props => {
    
const [products, setProducts] = useState(undefined);

setProducts(props);

    return (
        <div>
            {
                products.map(product => {
                    if(product.bsr_category === "Baby Products") 
                        return <CardItem name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                    else return null;
                })
            }
        </div>
    );
}

export default BabyProducts;