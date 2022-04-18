import React, {useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../itemcount/ItemCount';
import { Link, useNavigate } from 'react-router-dom';

export default function ItemDetail({info}) {
    
    const {id, img, titulo, talle, precio, stock, descripcion} = info

    const [cantidad, setCantidad] = useState(0);

    const [habilitar, setHabilitar] = useState("True");

    const navigate = useNavigate()

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

    const finalizarCompra = (cant) => {
        setCantidad(cant)
        navigate(`/cart`)
    }

    const habilitarBotonFinalizar = () => {
        setHabilitar("False")
    }

    return (
        <div className="container-card-description2">
            <div className='container-imagen2'>
                <img className='description-imagen' src={img} alt="Icono Producto"></img> 
            </div>
            <div className='container-description2'>
                <p className='item-detail-titulo'>{titulo}</p>
                <p className='item-detail-descripcion'>{descripcion}</p>
                <p className='item-detail-talle'>{talle}</p>
                <p className='item-detail-precio'>$ {precio}</p>
                {habilitar === "True" && <ItemCount inicializador={count} action1={quitarCompra} action2={agregarCompra} action3={habilitarBotonFinalizar}>
                    <p>AGREGAR AL CARRITO</p>
                </ItemCount>}
                {habilitar === "False" && <button className='carrito' onClick={(e) => {finalizarCompra(parseInt(count))}}>TERMINAR</button>}
            </div>
        </div>
    )
}