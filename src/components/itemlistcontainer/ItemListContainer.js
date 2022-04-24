import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import ItemList from "../itemlist/ItemList";
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
import db from '../../utils/firebase';
import {collection, getDocs} from 'firebase/firestore';

const ItemListContainer = ({children}) => {

    const {titulo} = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])

    const getProducts = async () => {
        const itemsCollection = collection(db, 'productos');
        const productosSnapshot = await getDocs(itemsCollection);
        const listaDeProductos = productosSnapshot.docs.map((doc) => {
            let producto = doc.data();
            producto.id = doc.id;
            return producto; 
            }
        );
        return listaDeProductos
    } 

    useEffect( () => {
        setLoading(true)
        setProducts([])
        getProducts().then( (productos) => {
            titulo ? filtrarProductoPorTitulo(productos, titulo) : setProducts(productos)
        })
        .finally(() => setLoading(false))
    }, [titulo])


    const filtrarProductoPorTitulo = (array , titulo) => {
        return array.map( (product) => {
            if(product.titulo === titulo) {
               return setProducts(products => [...products, product]);
            }
        })
    }

    return(
        <>
        {
            loading
            ?
            <Loading>
                <p>Espere, se estan cargando los productos...</p>
            </Loading>
            :
            <div className="container-category">
                <h2 className="cards-category"> {children} </h2>
                <ItemList productos={products}/>
            </div>
        }
        </>
    )
}

export default ItemListContainer;