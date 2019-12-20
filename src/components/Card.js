import React from 'react';
import {Card, Col} from 'react-bootstrap';
import styled from 'styled-components';

const CardItem = props => {

    const CardI = styled(Card)`
        margin: 10px auto;
    `;
    const Image = styled(Card.Img)`
        max-height: 300px;
        width: auto;
    `;

    return (
        <Col md='4'>
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
        </Col>
    );
}

export default CardItem;