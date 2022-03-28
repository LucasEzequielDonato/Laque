import "./ItemListContainer.css";
import Items from "./itemlist/ItemList";

const ListProducts = ({children}) => {

    return(
        <div className="container-category">
            <h2 className="cards-category"> {children} </h2>
            <Items/>
        </div>
    )
}

export default ListProducts;