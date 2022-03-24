import React, {useState} from 'react';
import './ItemCount.css';
import ImgSuma from "./add-outline.svg";
import ImgResta from "./remove-outline.svg";

export default function ItemCount({stock, inicializador, onAdd}) {

    const [count, setCount] = useState(inicializador)

    const agregarCompra = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const quitarCompra = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const agregarCarrito = () => {
        onAdd(count)
    }

    return (
        <div className='container-compra-carrito'>
            <div className='container-compra'>
                <img className='compra-icono' src={ImgResta} alt="Icono Resta" onClick={quitarCompra}></img>
                <p>{count}</p>
                <img className='compra-icono' src={ImgSuma} alt="Icono Suma" onClick={agregarCompra}></img>
            </div>
            <p className='carrito' onClick={agregarCarrito}>agregar a la compra</p>
        </div>
    )
}