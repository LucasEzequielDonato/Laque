import React, {useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../itemcount/ItemCount';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function ItemDetail({info}) {
    
    const {id, img, titulo, talle, precio, stock, descripcion} = info

    const [cantidad, setCantidad] = useState(0);

    const finalizarCompra = (cant) => {
        setCantidad(cant)
        Navigate("/cart")
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
                <ItemCount stock={stock} inicializador={1} action={finalizarCompra}>
                    <p>TERMINAR</p>
                </ItemCount>
            </div>
        </div>
    )
}