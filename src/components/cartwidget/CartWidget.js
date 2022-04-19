import React, {useContext} from 'react';
import './CartWidget.css';
import IconoCarrito from "./cart-outline.svg";
import CartContext from '../../context/CartContext';

function CartWidget() {
    const {carrito} = useContext(CartContext);

    return (
        <div className="container-carrito">
            <img src={IconoCarrito} alt="Icono carrito"></img>
            {carrito.length >= 1 && <p>{carrito.length}</p>}
        </div>
    );
}
  
export default CartWidget;