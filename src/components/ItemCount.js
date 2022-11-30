import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState, useEffect } from "react";

export const ItemCount = ({ stock, init,  onAdd }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => { 
      setCount(init);
    },[init]);

    const sumo = () => {
      if (count < stock) 
        setCount(count + 1);
    }
    
    const resto = () => {
      if (count>0)
        setCount(count - 1);
    };

  return (
    <> 
      <ButtonGroup className="mb-2">
        <Button onClick={resto} className="botonCount">-</Button>
        <Button className="count">{count}</Button>
        <Button onClick={sumo} className="botonCount">+</Button>
      </ButtonGroup>
        {
        stock && count
          ?<Button variant="outline-primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
          :<Button variant="outline-primary" disabled>Agregar al carrito</Button>
        }
    </>
  );
};

export default ItemCount;