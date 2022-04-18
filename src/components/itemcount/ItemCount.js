import React, {Children, useState} from 'react';
import './ItemCount.css';
import ImgSuma from "./add-outline.svg";
import ImgResta from "./remove-outline.svg";

export default function ItemCount({children, inicializador, action1, action2, action3}) {

    return (
        <div className='container-compra-carrito'>
            <div className='container-compra'>
                <button className='boton-compra' onClick={action1}><img className='compra-icono' src={ImgResta} alt="Icono Resta"></img></button>
                <p>{inicializador}</p>
                <button className='boton-compra' onClick={action2}><img className='compra-icono' src={ImgSuma} alt="Icono Suma"></img></button>
            </div>
            <button className='carrito' onClick={action3}>{children}</button>
        </div>
    )
}