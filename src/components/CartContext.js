import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (prop) =>{
    const [cartList, setCartList] = useState([]);

    const addToCart = (product, cantidad) => {

        const findProduct = cartList.find(item =>  
            item.id === product.id
        )

        if (findProduct === undefined){
            setCartList([
                ...cartList,
                {
                    id: product.id,
                    images: product.images[0],
                    name: product.name,
                    price: product.price,
                    cantidadPedida: cantidad,
                    stock: product.stock - cantidad,
                    precioTotal: product.price * cantidad,
                }
            ])
        }else{
            findProduct.cantidadPedida += cantidad;
            findProduct.precioTotal = product.price * findProduct.cantidadPedida;
            setCartList([
                ...cartList,
            ]);
        }
    }

    const removeList = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        const deleteProduct = cartList.filter(product => {
           return product.id!==id
        })
        setCartList(deleteProduct);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            {prop.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;