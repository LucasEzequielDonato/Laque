import React, {useState, useEffect} from 'react';
import "./ItemDetailContainer.css";
import ItemDetail from "../itemdetail/ItemDetail.js";
import mockProductos from '../../utils/Productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({children}) => {
    
    const {id} = useParams()
    const [producto, setProduct] = useState({})

    const filtrarProductoPorID = (array, id) => {
        return array.map((product) => {
            if(product.id === id) {
                return setProduct(product);
            }
        })
    }

    useEffect(() => {
        filtrarProductoPorID(mockProductos, id)
    }, [])

    return(
        <div className="container-category-description">
            <h2 className="cards-category"> {children} </h2>
            <ItemDetail info={producto}/>
        </div>
    )
}

export default ItemDetailContainer;