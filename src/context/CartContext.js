import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0);

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
        setPrecioTotal(precioTotal + (parseInt(producto.precio)*producto.cantidad));
        setCantidadTotal(cantidadTotal + producto.cantidad);
    }

    const yaEstaEnElCarrito = (id) => {
        return carrito.some( producto => producto.id === id)
    }
    
    const vaciarTodo = () => {
        setCarrito([])
        setPrecioTotal(0)
        setCantidadTotal(0)
    }

    const borrarProducto = (id) => {
        const producto = carrito.find(produc => produc.id === id);
        setPrecioTotal(precioTotal - (parseInt(producto.precio)*producto.cantidad));
        setCantidadTotal(cantidadTotal - producto.cantidad);
        setCarrito(carrito.filter(produc => produc.id !== id));
    }

    const data = {
        carrito,
        precioTotal,
        cantidadTotal,
        agregarProductoAlCarro,
        borrarProducto,
        vaciarTodo,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext