import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarProductoAlCarro = (producto) => {
        if ( yaEstaEnElCarrito(producto.id) ) {
            const produc = carrito.find((p) => p.id === producto.id);
            const { cantidad } = produc;
            produc.cantidad = producto.cantidad + cantidad;
            const nuevoCarrito = [ ...carrito ];
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([ ...carrito, producto])
        }
    }

    const yaEstaEnElCarrito = (id) => {
        return carrito.some( producto => producto.id === id)
    }
    
    const vaciarCarrito = () => {
        setCarrito([])
    }

    const borrarProducto = (id) => {
        setCarrito(carrito.filter(produc => produc.id !== id));
    }

    const data = {
        carrito,
        agregarProductoAlCarro,
        borrarProducto
    }

    console.log(carrito)

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext