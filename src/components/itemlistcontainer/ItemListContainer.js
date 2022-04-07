import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import ItemList from "../itemlist/ItemList";
import mockProductos from '../../utils/Productos';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({children}) => {

    const {titulo} = useParams()
    const [products, setProducts] = useState([])
    
    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockProductos);
            }, 3000);
        });
    }

    const filtrarProductoPorCATEGORIA = (array, titulo) => {
        return array.map((product) => {
            if(product.titulo === titulo) {
                return setProducts(product => [...products, product]);
            }
        })
    }

    useEffect (() => {
        setProducts([])
        obtenerProductos().then((productos) => {
            titulo ? filtrarProductoPorCATEGORIA(productos, titulo) : setProducts(productos)
        })
    }, [titulo])

    return(
        <div className="container-category">
            <h2 className="cards-category"> {children} </h2>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer;