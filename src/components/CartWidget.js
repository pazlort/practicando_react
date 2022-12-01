import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
    const {calcItemsQty} = useContext(CartContext);
    const badge = calcItemsQty()

    return (
        <Link to={`/cart`} type="button" className="btn btn-outline-danger order-lg-1" >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-basket3-fill" viewBox="0 0 16 16">
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"></path>
            </svg>
            {
                badge>0 &&
                <Badge bg="secondary" className="badge">{badge}</Badge>
            }
        </Link>
    );
};

export default CartWidget;