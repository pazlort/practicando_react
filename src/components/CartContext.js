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

    const calcItemsQty=() => {
        const arrayCantidadTotal = cartList.map(product => product.cantidadPedida)
        return arrayCantidadTotal.reduce(((accumulator, currentValue) => accumulator + currentValue),0);
    }

    const precioTotalPorItem = (id)=> {
        const idItem = cartList.map(product => product.id).indexOf(id)
        return cartList[idItem].price * cartList[idItem].cantidadPedida
    }

    const subtotalCompra =()=>{
        let preciosPorProductos = cartList.map(product => precioTotalPorItem(product.id));
        return preciosPorProductos.reduce(((accumulator, currentValue) => accumulator + currentValue),0);
    }

    const precioTotalCompra = () => {
        return subtotalCompra()
    }

    return(
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem, 
            calcItemsQty,
            precioTotalPorItem,
            subtotalCompra,
            precioTotalCompra,
        }}>
            {prop.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;