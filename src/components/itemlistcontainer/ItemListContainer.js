import "./ItemListContainer.css";
import Card from "../card/Card";

const ListProducts = ({children}) => {
    let productos = {
        titulo : "Pantalon",
        talle : "XL",
        precio : 3000,
        stock : 5
    }
    
    return(
        <div className="container-category">
            <h2 className="cards-category"> {children} </h2>
            <div className="container-category-cards">
                <Card info={productos}/>
            </div>
        </div>
    )
}

export default ListProducts;