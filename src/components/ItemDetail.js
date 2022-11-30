import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../components/ItemCount";
import Col from "react-bootstrap/Col";
import { Container, Button} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const {addToCart} = useContext(CartContext);

  const onAdd = (cantidad) => {
      alert("tu seleccionaste " + cantidad + " items.");
      setItemCount(cantidad);
      addToCart(item, cantidad)
  }

  return (
    <>
      {item && item.images
        ? 
        <Card className="cardDetalle">
          <Container>
            <Row>
              <Col className="imagenProduct" xs={12} md={6} sm={6} lg={6} >
                <Card.Img variant="top" src={item.images} />
              </Col>
              <Col xs={12} md={6} sm={6} lg={6}>
                <Card.Body>
                  <Card.Title className="tituloProductoDetalle">{item.name}</Card.Title>
                  <Card.Text> {item.detail}</Card.Text>
                  <Card.Text className="stockProducto"> Stock: {item.stock} u.</Card.Text>
                  <Card.Text className="precioProducto"> Precio: {item.price} ARS</Card.Text>
                  {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} init={itemCount} onAdd={onAdd}/>
                    : <Link to={`/cart`}><Button variant="outline-primary">Ir al CheckOut</Button></Link>
                  }
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      : 'Cargando...'}
    </>
  );
};

export default ItemDetail;