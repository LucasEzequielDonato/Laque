import React from 'react';
import "./ItemList.css";
import Card from "../card/Card";

const ItemList = ({productos}) => {
    
    
    return(
        <div className="container-category-cards">
            {productos.map((producto, i) => {
                return(
                    <Card info={producto}/>
                )
            })}
        </div>
    )
}

export default ItemList;