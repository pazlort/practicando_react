import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../containers/ItemCount";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

export const ItemDetail = ({ item }) => {
  return (
    <Card className="detalleProducto">
      <Container>
        <Row>
          <Col xs={12} md={4} sm={6} lg={8}>
            <Card.Img variant="top" className="imagenProduct" src={item.images} />
          </Col>
          <Col xs={12} md={4} sm={6} lg={4}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text className="detail">{item.detail}</Card.Text>
              <Card.Text className="stock">Stock: {item.stock} u.</Card.Text>
              <Card.Text className="precio"> Precio: {item.price}</Card.Text>
              <ItemCount/>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default ItemDetail;