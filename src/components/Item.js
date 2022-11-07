import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Item = ({ id, title, stock, price, thumbnail }) => {
  return (
    <Col xs={12} md={4} sm={6} lg={3}>
      <Link to={`/item/${id}`}>
      <Card key={id} >
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title className="tituloProducto">{title}</Card.Title>
                <Card.Text className="stock">Stock: {stock} u.</Card.Text>
                <Card.Text className="precio"> Precio: {price}</Card.Text>
            </Card.Body>
      </Card>
      </Link>
    </Col>
  )
};

export default Item;