import React, {useState, useEffect} from 'react';
import "./ItemDetailContainer.css";
import ItemDetail from "../itemdetail/ItemDetail.js";
import mockProductos from '../../utils/Productos';

const ItemDetailContainer = ({children}) => {
    
    const [product, setProduct] = useState([])

    const obtenerProducto = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockProductos[0]);
            }, 3000);
        });
    }

    const obtenerProductoASYNC = async () => {
        setProduct(await obtenerProducto())
    }

    useEffect (() => {
        obtenerProductoASYNC();
    }, [])

    return(
        <div className="container-category-description">
            <h2 className="cards-category"> {children} </h2>
            <ItemDetail info={product}/>
        </div>
    )
}

export default ItemDetailContainer;