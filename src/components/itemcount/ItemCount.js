import React, {useState} from 'react';
import './ItemCount.css';
import ImgSuma from "./add-outline.svg";
import ImgResta from "./remove-outline.svg";

export default function ItemCount({info}) {

    let stock = info
    const [count, setCount] = useState(0)

    const agregarCompra = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const quitarCompra = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='container-compra'>
            <img className='compra-icono' src={ImgResta} alt="Icono Resta" onClick={quitarCompra}></img>
            <p>{count}</p>
            <img className='compra-icono' src={ImgSuma} alt="Icono Suma" onClick={agregarCompra}></img>
        </div>
    )
}