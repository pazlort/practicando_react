import React from "react";
import Product from "../components/Product";
import products from '../utils/productos'
import { useEffect,useState } from "react";
import { customFetch } from '../utils/customFetch'


const List = ()=> {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    customFetch(2000, products)
       .then(response => setProductos(response))
       .catch(err => console.log(err))
  }, [])

  return (
    <>
    {
      productos.map(item => (
        <Product
          key={item.id}
          title={item.name}
          price={item.price}
          stock={item.stock}
          category={item.category}
          thumbnail={item.images}/>
      ))
    }
    </>
  );
};

export default List;