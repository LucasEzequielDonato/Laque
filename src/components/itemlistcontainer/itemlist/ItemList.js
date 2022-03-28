import React,{useState, useEffect} from "react";
import "./ItemList.css";
import Card from "../../card/Card";

const ItemList = () => {
    const mockProductos = [{
        img : "https://media.vogue.es/photos/5cc7367ffdc82261481fda65/master/w_2500,h_3194,c_limit/pantalones_vaqueros_mom_jeans_goma_pull_bear_basico_armario_2019_7512.jpg",
        titulo : "Pantalon",
        talle : "XL",
        precio : 3000,
        stock : 5
    },
    {
        img: "https://www.instyle.es/medio/2019/02/04/pantalones-vaqueros-cropped-primavera-uterque_b2a5edab_1000x1499.jpg",
        titulo : "Pantalon",
        talle : "L",
        precio : 2900,
        stock : 7
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
            <Card info={products[1]}/>
        </div>
    )
}

export default ItemList;