import React from 'react';
import "./ItemList.css";
import Card from "../card/Card";

const ItemList = ({productos}) => {
    
    
    return(
        <div className="container-category-cards">
            <Card info={productos[0]}/>
            <Card info={productos[1]}/>
        </div>
    )
}

export default ItemList;