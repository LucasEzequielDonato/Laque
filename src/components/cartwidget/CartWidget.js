import React from 'react';
import './CartWidget.css';
import IconoCarrito from "./cart-outline.svg";

function CartWidget() {
    return (
        <div className="container-carrito">
            <img src={IconoCarrito} alt="Icono carrito"></img>
        </div>
    );
}
  
export default CartWidget;