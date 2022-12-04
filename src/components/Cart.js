import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Card from 'react-bootstrap/Card';
import { collection, serverTimestamp, doc, setDoc, updateDoc, increment } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"

const Cart = () => {
  const {cartList, 
    removeList, 
    deleteItem,
    precioTotalPorItem,
    subtotalCompra,
    precioTotalCompra} = useContext(CartContext);

  const createOrder = () => {
    let order ={
      buyer: {
        name: 'Paz María Grecht Lort',
        email: 'pazmarialort@gmail.com',
        phone: '123456789',
      },
      date: serverTimestamp(),
      items: cartList.map(item => ({
        id: item.id,
        price: item.price,
        title: item.name,
        cantidadPedida: item.cantidadPedida,
      })),
      total: precioTotalCompra(),
    } 

    const createOrderInFirestore = async () => {
      const newOrder = doc(collection(db, 'orders'));
      await setDoc(newOrder, order);
      return newOrder
    }

    createOrderInFirestore()
      .then(res => {
        alert('Order ID =' + res.id)
        cartList.forEach(async(item) => {
          const itemRef = doc(db, "products", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.cantidadPedida)
          })
        })
        removeList()
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h3 className="titulo">TU CARRITO</h3>
      <Link to={`/`} ><Button variant="outline-primary">Seguir comprando</Button></Link>
      <Button variant="outline-primary" onClick={removeList}>Borrar todo</Button>

      {
        cartList.length === 0
        ? <h5>No hay productos en el carrito</h5>
        : cartList.map(item =>
          <Card className="card-cart" key={item.id}>
            <Card.Img src={item.images} className="img-cart" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.cantidadPedida} item(s) / {item.price} ARS. c/u</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{precioTotalPorItem(item.id)} ARS.</Card.Subtitle>
            </Card.Body>
            <Button variant="outline-primary" onClick={() => deleteItem(item.id)}>Borrar</Button>
          </Card>
        )
      }
      {
        cartList.length > 0 &&
        <Card>
          <Card.Header as="h5">RESUMEN DE SU COMPRA</Card.Header>
          <Card.Body>
            <Card.Text>Subtotal: {subtotalCompra()} ARS.</Card.Text>
            <Card.Text>Descuentos: 0 ARS.</Card.Text>
            <Card.Title>Total a pagar: {precioTotalCompra()} ARS.</Card.Title>
            <Button variant="outline-primary" onClick={createOrder}>Ir a pagar</Button>
          </Card.Body>
        </Card>
      }
    </>
  );
};

export default Cart;