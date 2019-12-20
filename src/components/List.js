import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from './Card';
import {Row, Nav} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const List = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);
    const url = 'https://demo9165932.mockable.io/products';
    let key = 0;

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(url);
            setProducts(result.data.products);
        };
        fetchData();

    }, [url]);

    const resetCategory = () => {
        setCategory(null);
    }

    const setBabyProducts = () => {
        setCategory("BabyProducts");
    }

    const setSportsOutdoors = () => {
        setCategory("SportsOutdoors");
    }

    const setHomeKitchen = () => {
        setCategory("HomeKitchen");
    }

    const setHealthCare = () => {
        setCategory("HealthCare");
    }

    return (
        <div className="container">
            <Row>
                <BrowserRouter history={history}>
                    <Nav>
                        <Nav.Item as="li">
                            <Link onClick={resetCategory} to="/all">Reset</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link onClick={setBabyProducts} to="/babyproducts">Baby Products</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link onClick={setSportsOutdoors}>Sports & Outdoors</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link onClick={setHomeKitchen}>Home & Kitchen</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link onClick={setHealthCare}>Health & Personal Care</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Route path="/all" component={List}></Route>
                    <Route path="/babyproducts" component={List}></Route>

                </BrowserRouter>
            </Row>
            <Row>
                {
                    products.map(product => {
                        if (category === "HomeKitchen") {
                            if(product.bsr_category === "Home & Kitchen"){
                                return <CardItem key={++key} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                            }
                        } else if (category === "SportsOutdoors"){
                            if(product.bsr_category === "Sports & Outdoors"){
                                return <CardItem key={++key} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                            }
                        } else if (category === "BabyProducts"){
                            if(product.bsr_category === "Baby Products"){
                                return <CardItem key={++key} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                            }
                        } else if (category === "HomeKitchen"){
                            if(product.bsr_category === "Home & Kitchen"){
                                return <CardItem key={++key} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                            }
                        } else if (category === "HealthCare"){
                            if(product.bsr_category === "Health & Personal Care"){
                                return <CardItem key={++key} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                            }
                        } else return <CardItem key={++key} name={product.name} brand={product.brand} price={product.price} currency={product.currency} asin={product.asin} weight={product.weight} img={product.img} link={product.link}/>
                    }) 
                }
            </Row>
        </div>
    )
}

export default List;