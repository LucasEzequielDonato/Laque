import React, {useState, useContext} from 'react';
import { Button } from '@mui/material';
import CartContext from '../context/CartContext';
import ModalCustom from '../components/modal/Modal';
import { Link } from 'react-router-dom';
import './Cart.css';
import db from '../utils/firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function Cart() {
    const {carrito, borrarProducto, cantidadTotal, precioTotal, vaciarTodo} = useContext(CartContext);
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',  
        email: '',
    })
    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: carrito.map( (carrito)=> {
                return {
                    id: carrito.id,
                    titulo: carrito.titulo,
                    price: carrito.precio
                }
            }),
            total: precioTotal
        }
    )
    const [successOrder, setSuccessOrder] = useState()
    const [validado, setValidado] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.name === "" || formData.phone === "" || formData.email === "") {
            setValidado(false)
        }
        else {
            let prevOrder = {...order,
                buyer: formData
            }
            setOrder({...order,
                buyer: formData})
            pushOrder(prevOrder)
        }
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        setSuccessOrder(orderDoc.id)
        vaciarTodo();

    }

    const handleChange = (e) => {
        const {value, name} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <div className='cart-container'>
            {carrito.length === 0 &&
            <div className='cart-noProductos'>
                <p>No has seleccionado nada para comprar</p>
                <Link to={'/productos'}>IR A VER LOS PRODUCTOS</Link>
            </div>
            }
            {carrito.length > 0 && 
            <>
                <div className='cart-container-descripcionTotal'>
                    <p className='cart-descripcionTotal-cantidadTotal'>QUIERES COMPRAR {cantidadTotal} PRODUCTOS</p>
                    <p className='cart-descripcionTotal-precioTotal'>EL PRECIO TOTAL DE LA COMPRA ES $ {precioTotal}</p>
                </div>
                {carrito.map((prod) =>(
                    <div key={ prod.id } className='cart-producto'>
                        <button className='cart-producto-eliminarProducto' onClick={() => borrarProducto(prod.id)}>X</button>
                        <img className='cart-producto-imagen' src={prod.img}></img>
                        <div className='cart-producto-descripcion'>
                            <p className='cart-descripcion-titulo'>{prod.titulo}</p>
                            <p className='cart-descripcion-precio'>Precio: $ {prod.precio}</p>
                            <p className='cart-descripcion-cantidad'>Cantidad: {prod.cantidad}</p>
                        </div>
                    </div>
                ))}
                <div>
                <Button onClick={() => setOpenModal(true)}>Completar Compra</Button>
                </div>
            </>
            }
            <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                {successOrder ? (
                    <div className='cart-container-orden'>
                        <h3 className='orden-titulo'>Orden generada correctamente</h3>
                        <p className='orden'>{successOrder}</p>
                    </div>
                ) : (
                    <div className='cart-container-formulario'>
                        {validado &&
                            <h2 className='formulario-titulo'>INGRESA</h2>
                        }
                        {validado === false &&
                            <h2 className='formulario-titulo'>COMPLETA TODOS LOS CAMPOS</h2>
                        }
                        <form className='formulario-container-descripcion' onSubmit={handleSubmit}>
                            <input className='formulario-campos' type="text" name='name' placeholder='NOMBRE Y APELLIDO'
                                onChange={handleChange} 
                                value={formData.name}
                            />
                            <input className='formulario-campos' type="number" name='phone' placeholder='TELEFONO' 
                                onChange={handleChange} 
                                value={formData.phone}
                            />
                            <input className='formulario-campos' type="mail" name='email' placeholder='EMAIL'
                                onChange={handleChange} 
                                value={formData.email}
                            />
                            <div className='formulario-container-enviar'>
                                <Button type="submit">Enviar</Button>
                            </div>
                        </form>
                    </div>
                )}
                
            </ModalCustom>
        </div>
    )
}