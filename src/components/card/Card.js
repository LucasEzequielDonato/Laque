import React from 'react';
import './Card.css';
import FotoProducto from "./FotoProductoPantalones.jpg";
import ItemCount from "../itemcount/ItemCount";

export default function Card({info}) {

    try {
        var {titulo, talle, precio, stock} = info
        console.log(info)
    } catch (error) {
        
    }

    const onAdd = (count) => { console.log(`Agregaste ${count} productos al carrito.`) }

    return (
        <div className="container-card">
            <img className='card-imagen' src={FotoProducto} alt="Icono Producto"></img>
            <div className='container-description'>
                <p className='description-titulo'>{titulo}</p>
                <p className='description-talle'>{talle}</p>
                <p className='description-precio'>$ {precio}</p>
                <ItemCount stock={stock} inicializador={0} onAdd={onAdd}/>
            </div>
        </div>
    )
}