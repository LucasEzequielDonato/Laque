import React from 'react';
import './Card.css';
import ItemCount from "../itemcount/ItemCount";

export default function Card({info}) {

    const {img, titulo, talle, precio, stock} = info

    const onAdd = (count) => { console.log(`Agregaste ${count} productos al carrito.`) }

    return (
        <div className="container-card">
            <img className='card-imagen' src={img} alt="Icono Producto"></img>
            <div className='container-description'>
                <p className='description-titulo'>{titulo}</p>
                <p className='description-talle'>{talle}</p>
                <p className='description-precio'>$ {precio}</p>
                <ItemCount stock={stock} inicializador={0} onAdd={onAdd}/>
            </div>
        </div>
    )
}