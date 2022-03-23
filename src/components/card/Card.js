import React from 'react';
import './Card.css';
import FotoProducto from "./FotoProductoPantalones.jpg";
import ItemCount from "../itemcount/ItemCount";

export default function Card({info}) {

    let {titulo, talle, precio, stock} = info

    return (
        <div className="container-card">
            <img className='card-imagen' src={FotoProducto} alt="Icono Producto"></img>
            <div className='container-description'>
                <p className='description-titulo'>{titulo}</p>
                <p className='description-talle'>{talle}</p>
                <p className='description-precio'>$ {precio}</p>
                <ItemCount info={stock}/>
            </div>
        </div>
    )
}