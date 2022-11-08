import React from "react";
import Item from "./Item";

const ItemList = ({product})=> {
  return (
    <>
      {product.map(item => (
        <Item
          id={item.id}
          title={item.name}
          price={item.price}
          stock={item.stock}
          category={item.category}
          thumbnail={item.images[0]}/>          
      ))}
    </>
  );
};

export default ItemList;