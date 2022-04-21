import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import ItemList from "../itemlist/ItemList";
import mockProductos from '../../utils/mockProductos';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';

const ItemListContainer = ({children}) => {

    const {titulo} = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockProductos);
            }, 3000);
        })
    } 

    useEffect( () => {
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
            <Loading></Loading>
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