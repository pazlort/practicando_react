import ItemDetailContainer from "./ItemDetailContainer";
import logo from '../img/logo.png';


const ItemListContainer = (props) => {
    return (
        <>
            <div className="home">
                <h1 className='title'>{props.greeting}</h1>
                <img alt="Imagen de inicio" src={logo} class="homeImage" />
            </div>
            <ItemDetailContainer/>
        </>
    );
};

export default ItemListContainer;