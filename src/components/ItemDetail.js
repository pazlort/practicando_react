import React from 'react'
import Card from "react-bootstrap/Card";
import ItemCount from './ItemCount';

export const ItemDetail = ({ item }) => {
  return (
      <Card key={item.id}>
            <Card.Img variant="top" className='imagenProduct' src={item.images} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="stock">Stock: {item.stock} u.</Card.Text>
                <Card.Text className="precio"> Precio: {item.price}</Card.Text>
            </Card.Body>
            <ItemCount/>
      </Card>
  )
}

export default ItemDetail