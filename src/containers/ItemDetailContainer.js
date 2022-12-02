import React, { useEffect,useState } from "react"
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState([]);
  let { idItem } = useParams();

  useEffect(()=>{
      firestoreFetchOne (idItem)
          .then (result => setDetalle(result))
          .catch(err => console.log(err))
  },[idItem])

  return (
    <ItemDetail item={detalle}/>
  );
};

export default ItemDetailContainer;