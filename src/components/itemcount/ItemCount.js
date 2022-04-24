import React, {useState} from 'react';
import './ItemCount.css';
import ImgSuma from "./add-outline.svg";
import ImgResta from "./remove-outline.svg";

export default function ItemCount({children, stock, accion1}) {

    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(stock);
      

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

    return (
        <div className='container-compra-carrito'>
            <div className='container-compra'>
                <button className='boton-compra' onClick={quitarCompra}><img className='compra-icono' src={ImgResta} alt="Icono Resta"></img></button>
                <p>{count}</p>
                <button className='boton-compra' onClick={agregarCompra}><img className='compra-icono' src={ImgSuma} alt="Icono Suma"></img></button>
            </div>
            <button className='carrito' onClick={() => accion1(count)}>{children}</button>
        </div>
    )
}