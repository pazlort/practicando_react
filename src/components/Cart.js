import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const {cartList, removeList, deleteItem} = useContext(CartContext);

  return (
    <>
      <h3 className="titulo">TU CARRITO</h3>
      <Link to={`/`} ><Button variant="outline-primary">Seguir comprando</Button></Link>
      <Button variant="outline-primary" onClick={removeList}>Borrar todo</Button>

        {
          cartList.length === 0
          ? <p>No hay productos en el carrito</p>
          : cartList.map(item =>
            <Card className="card-cart" key={item.id}>
              {/* <Link to={`/item/${item.id}`}> */}
                <Card.Img src={item.images} className="img-cart" />
              {/* </Link> */}
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.price} ARS c/u</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{item.cantidadPedida} item(s) / {item.precioTotal} ARS</Card.Subtitle>
            </Card.Body>
            <Button variant="outline-primary" className="delete-product" onClick={() => deleteItem(item.id)}>Borrar</Button>
          </Card>
          )
        }
    </>
  );
};

export default Cart;