import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [carrito, agregarCompra] = useState([])

    const agregarProductoAlCarro = (producto) => {
        agregarCompra(producto)
    }
    
    const data = {
        carrito,
        agregarProductoAlCarro
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext