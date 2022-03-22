import "./ItemListContainer.css";
import Card from "../card/Card";

const ListProducts = ({children}) => {
    return(
        <div className="container-category">
            <h2 className="cards-category"> {children} </h2>
            <div className="container-category-cards">
            <Card titulo="Pantalon" talle="L" precio="2000"/>
            <Card titulo="Pantalon" talle="XL" precio="2500"/>
            <Card titulo="Pantalon" talle="XXL" precio="3000"/>
            <Card titulo="Pantalon" talle="L" precio="2100"/>
            <Card titulo="Pantalon" talle="S" precio="1800"/>
            <Card titulo="Pantalon" talle="XXL" precio="3000"/>
            </div>
        </div>
    )
}

export default ListProducts;