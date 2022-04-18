import React, {useState, useContext} from 'react';
import './Card.css';
import ItemCount from "../itemcount/ItemCount";
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';

export default function Card({info}) {

    const {id, img, titulo, talle, precio, stock} = info

    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(stock);
    const [habilitar, setHabilitar] = useState("True");
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(0);
    const {carrito, agregarProductoAlCarro} = useContext(CartContext)
    
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

    const finalizarCompra = (cant) => {
        const producto = [{
            id : id,
            precio : precio,
            cantidad : cant
        }]
        agregarProductoAlCarro(producto)
        navigate(`/cart`)
    }

    return (
        <div className="container-card">
            <Link to={`/producto/${id}`}><img className='card-imagen' src={img} alt="Icono Producto"></img></Link>
            <div className='container-description'>
                <p className='card-description-titulo'>{titulo}</p>
                <p className='card-description-talle'>{talle}</p>
                <p className='card-description-precio'>$ {precio}</p>
                {habilitar === "True" && <ItemCount inicializador={count} action1={quitarCompra} action2={agregarCompra} action3={habilitarBotonFinalizar}>
                    <p>AGREGAR AL CARRITO</p>
                </ItemCount>}
                {habilitar === "False" && <button className='carrito' onClick={(e) => {finalizarCompra(parseInt(count))}}>TERMINAR</button>}
            </div>
        </div>
    )
}