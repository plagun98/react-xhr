import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Card, Col } from 'react-bootstrap';

const CardI = styled(Card)`
    margin: 10px auto;
`;
const Image = styled(Card.Img)`
    max-height: 300px;
    width: auto;
`;
const ColStyled = styled(Col)`
    padding: 0;

`;

const CardItem = props => (

    <ColStyled md='4'>
        <CardI style={{ width: '18rem' }}>
            <Image variant="top" src={props.img} />
            <Card.Body>
                <ul>
                    <li><span>Name:</span> {props.name}</li>
                    <li><span>Brand:</span> {props.brand}</li>
                    <li><span>Price:</span> {props.price} {props.currency}</li>
                    <li><span>Asin:</span> {props.asin}</li>
                    <li><span>Weight:</span> {props.weight}</li>
                </ul>
                <a href={props.link} target="_blank" rel="noopener noreferrer">Link</a>
            </Card.Body>
        </CardI>
    </ColStyled>
);

CardItem.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    asin: PropTypes.string,
    weight: PropTypes.number,
    img: PropTypes.string,
    link: PropTypes.string
}

export default CardItem;