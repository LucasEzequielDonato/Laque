import React from 'react';
import './Card.css';
import FotoProducto from "./FotoProductoPantalones.jpg";

function Card(props) {
    return (
        <div className="container-card">
            <img src={FotoProducto} alt="Icono Producto"></img>
            <div className='container-description'>
                <p className='description-titulo'>{props.titulo}</p>
                <p className='description-talle'>Talle: {props.talle}</p>
                <p className='description-precio'>$ {props.precio}</p>
                <button>Comprar</button>
            </div>
        </div>
    );
}
  
export default Card;