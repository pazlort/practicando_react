import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';

const Product = (props) => {

    useEffect(() => {
        console.log('ups!! El componente se ha actaulizado')
      }, [])

  return (
    <Card style={{ width: '18rem' }} key={props.id}>
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body>
                <Card.Title > {props.name}</Card.Title>
                <Card.Text>
                    <p>Stock: {props.stock}</p>
                    <p>Precio: {props.price}</p>
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
    </Card>
  )
}

export default Product;