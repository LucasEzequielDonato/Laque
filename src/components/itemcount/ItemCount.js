import React, {useState} from 'react';
import './ItemCount.css';
import ImgSuma from "./add-outline.svg";
import ImgResta from "./remove-outline.svg";

export default function ItemCount({children, stock, inicializador, action}) {

    const [count, setCount] = useState(inicializador);
    const [count2, setCount2] = useState(stock);
    const [habilitar, setHabilitar] = useState("True");

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

    const habilitarBotonFinalizar = () => {
        setHabilitar("False")
    }

    return (
        <div className='container-compra-carrito'>
            <div className='container-compra'>
                <button className='boton-compra' onClick={quitarCompra}><img className='compra-icono' src={ImgResta} alt="Icono Resta"></img></button>
                <p>{count}</p>
                <button className='boton-compra' onClick={agregarCompra}><img className='compra-icono' src={ImgSuma} alt="Icono Suma"></img></button>
            </div>
            {habilitar === "True" && <button className='carrito' onClick={habilitarBotonFinalizar}>AGREGAR AL CARRITO</button>}
            {habilitar === "False" && <button className='carrito' onClick={(e) => {action(parseInt(count))}}>{children}</button>}
        </div>
    )
}