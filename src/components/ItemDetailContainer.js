import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import {customFetch} from '../utils/customFetch';
import products from '../utils/productos';

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState([])
  let { idItem } = useParams();
  console.log('soy el param',idItem);

  useEffect(() => {
      customFetch(2000, products.find(product => {
        console.log('soy el id del producto',product.id);
          return product.id === parseInt(idItem)
      }))
          .then(result => setDetalle(result))
          .catch(err => console.log(err))
  }, []);

  return (
        <ItemDetail item={detalle}/>
  )
}

export default ItemDetailContainer