import React, {useState, useEffect} from 'react';
import "./ItemDetailContainer.css";
import ItemDetail from "../itemdetail/ItemDetail.js";
import Loading from '../loading/Loading';
import { useParams } from 'react-router-dom';
import db from '../../utils/firebase';
import {doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = ({children}) => {
    
    const {id} = useParams()
    const [producto, setProduct] = useState({})
    const [loading, setLoading] = useState([true])

    const getProduct = async () => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        let producto = docSnap.data();
        producto.id = docSnap.id;
        setProduct(producto)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        getProduct()
    }, [id])

    return(
        <>
        {
            loading
            ?
            <Loading>
                <p>Espere, se esta cargando el producto...</p>
            </Loading>
            :
                <div className="container-category-description">
                <h2 className="cards-category"> {children} </h2>
                <ItemDetail info={producto}/>
            </div>
        }
        </>
    )
}

export default ItemDetailContainer;