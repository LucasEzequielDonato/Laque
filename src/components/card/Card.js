import React, {useState, useContext} from 'react';
import './Card.css';
import ItemCount from "../itemcount/ItemCount";
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

export default function Card({info}) {

    const {id, img, titulo, talle, precio, stock} = info
    const [habilitar, setHabilitar] = useState("True");
    const {agregarProductoAlCarro} = useContext(CartContext);

    const habilitarBotonFinalizar = (cant) => {
        agregarProductoAlCarro({...info, cantidad : cant});
        setHabilitar("False");
    }

    return (
        <div className="container-card">
            <Link to={`/producto/${id}`}><img className='card-imagen' src={img} alt="Icono Producto"></img></Link>
            <div className='container-description'>
                <p className='card-description-titulo'>{titulo}</p>
                <p className='card-description-talle'>{talle}</p>
                <p className='card-description-precio'>$ {precio}</p>
                <div className='card-container-count'>
                    {habilitar === "True" &&
                        <ItemCount stock={stock} accion1={habilitarBotonFinalizar}>
                            <p>AGREGAR AL CARRITO</p>
                        </ItemCount>}
                    {habilitar === "False" && 
                        <Link to={'/cart'} className='btn-terminar'>TERMINAR</Link>}
                </div>
            </div>
        </div>
    )
}