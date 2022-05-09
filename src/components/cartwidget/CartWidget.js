import React, {useContext} from 'react';
import './CartWidget.css';
import IconoCarrito from "./cart-outline.svg";
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
    const {cantidadTotal} = useContext(CartContext);

    return (
        <Link to={'/cart'} className="container-carrito">
            <img src={IconoCarrito} alt="Icono carrito"></img>
            {cantidadTotal >= 1 && <p className='carrito-cantidadTotal'>{cantidadTotal}</p>}
        </Link>
    );
}
  
export default CartWidget;