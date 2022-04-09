import React, {useState} from 'react';
import './ItemCount.css';
import ImgSuma from "./add-outline.svg";
import ImgResta from "./remove-outline.svg";
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function ItemCount({children, stock, inicializador, onAdd}) {

    const [count, setCount] = useState(inicializador)
    const [count2, setCount2] = useState(stock)

    const agregarCompra = () => {
        if (count < stock) {
            setCount(count + 1)
            setCount2(count2 - 1)
        }
    }

    const quitarCompra = () => {
        if (count > 1) {
            setCount(count - 1)
            setCount2(count2 + 1)
        }
    }

    const agregarCarrito = () => {
        onAdd()
    }

    return (
        <div className='container-compra-carrito'>
            <div className='container-compra'>
                <button className='boton-compra' onClick={quitarCompra}><img className='compra-icono' src={ImgResta} alt="Icono Resta"></img></button>
                <p>{count}</p>
                <button className='boton-compra' onClick={agregarCompra}><img className='compra-icono' src={ImgSuma} alt="Icono Suma"></img></button>
            </div>
            {count > 0 && <p className='carrito' onClick={agregarCarrito}>{children}</p>}
        </div>
    )
}