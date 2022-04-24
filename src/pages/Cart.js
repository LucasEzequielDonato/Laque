import React, {useContext} from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
    const {carrito, borrarProducto} = useContext(CartContext);

    return (
        <div className='cart-container'>
            {carrito.length === 0 &&
            <div className='cart-noProductos'>
                <p>No hay nada en el carrito</p>
                <Link to={'/productos'}>IR A VER LOS PRODUCTOS</Link>
            </div>
            }
            {                    
            carrito.map((prod) =>(
                <div key={ prod.id } className='cart-producto'>
                    <button className='cart-producto-eliminarProducto' onClick={() => borrarProducto(prod.id)}>X</button>
                    <img className='cart-producto-imagen' src={prod.img}></img>
                    <div className='cart-producto-descripcion'>
                        <p className='cart-descripcion-titulo'>{prod.titulo}</p>
                        <p className='cart-descripcion-precio'>Precio: $ {prod.precio}</p>
                        <p className='cart-descripcion-cantidad'>Cantidad: {prod.cantidad}</p>
                    </div>
                </div>
            ))
            }
        </div>
    )
}