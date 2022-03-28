import React,{useState, useEffect} from "react";
import "./ItemList.css";
import Card from "../../card/Card";

const ItemList = () => {
    const mockProductos = [{
        titulo : "Pantalon",
        talle : "XL",
        precio : 3000,
        stock : 5
    }]

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
        <div className="container-category-cards">
            <Card info={products[0]}/>
        </div>
    )
}

export default ItemList;