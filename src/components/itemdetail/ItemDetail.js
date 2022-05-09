import React, {useState, useContext} from 'react';
import './ItemDetail.css';
import ItemCount from '../itemcount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

export default function ItemDetail({info}) {
    
    const {img, titulo, talle, precio, stock, descripcion} = info
    const [habilitar, setHabilitar] = useState("True");
    const {agregarProductoAlCarro} = useContext(CartContext);

    const habilitarBotonFinalizar = (cant) => {
        agregarProductoAlCarro({...info, cantidad : cant});
        setHabilitar("False")
    }

    return (
        <div className="container-card-description2">
            <div className='container-imagen2'>
                <img className='description-imagen' src={img} alt="Icono Producto"></img> 
            </div>
            <div className='container-description2'>
                <p className='item-detail-titulo'>{titulo}</p>
                <p className='item-detail-descripcion'>{descripcion}</p>
                <p className='item-detail-talle'>{talle}</p>
                <p className='item-detail-precio'>$ {precio}</p>
                <div className='item-container-count'>
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