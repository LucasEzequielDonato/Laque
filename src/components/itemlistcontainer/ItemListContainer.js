import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import ItemList from "../itemlist/ItemList";
import mockProductos from '../../utils/Productos';

const ItemListContainer = ({children}) => {

    const [products, setProducts] = useState([])
    
    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockProductos);
            }, 3000);
        });
    }

    const obtenerProductosASYNC = async () => {
        setProducts(await obtenerProductos())
    }

    useEffect (() => {
    obtenerProductosASYNC();
    }, [])

    return(
        <div className="container-category">
            <h2 className="cards-category"> {children} </h2>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer;