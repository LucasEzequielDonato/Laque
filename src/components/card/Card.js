import React from 'react';
import './Card.css';
import ItemCount from "../itemcount/ItemCount";
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Card({info}) {

    const {id, img, titulo, talle, precio, stock} = info

    const onAdd = (count) => { console.log(`Agregaste ${count} productos al carrito.`) }

    return (
        <div className="container-card">
            <Link to={`/producto/${id}`}><img className='card-imagen' src={img} alt="Icono Producto"></img></Link>
            <div className='container-description'>
                <p className='card-description-titulo'>{titulo}</p>
                <p className='card-description-talle'>{talle}</p>
                <p className='card-description-precio'>$ {precio}</p>
                <ItemCount stock={stock} inicializador={1} onAdd={onAdd}/>
            </div>
        </div>
    )
}