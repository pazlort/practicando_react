import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList"
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    let { idCategory } = useParams();

    useEffect(()=>{
        firestoreFetch (idCategory)
            .then (result => setProductos(result))
            .catch(err => console.log(err))
    },[idCategory])

    return (
        <Container className="containerProductos">
            <Row>
                <ItemList products={productos}/>
            </Row>
        </Container>
    );
};

export default ItemListContainer;