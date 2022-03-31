import React from 'react';
import './ItemDetail.css';

export default function itemdetail({info}) {

    const {id, img, titulo, talle, precio, stock, descripcion} = info

    return (
        <div className="container-card-description2">
            <div className='container-imagen2'>
                <img className='description-imagen' src={img} alt="Icono Producto"></img> 
            </div>
            <div className='container-description2'>
                <p className='description-titulo'>{titulo}</p>
                <p className='description-titulo'>{descripcion}</p>
                <p className='description-talle'>{talle}</p>
                <p className='description-precio'>$ {precio}</p>
                <p className='description-precio'>Quedan en STOCK: {stock}</p>
            </div>
        </div>
    )
}