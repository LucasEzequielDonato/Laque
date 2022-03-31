import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer>
        <p>PRODUCTOS DESTACADOS</p>
      </ItemListContainer>
      <ItemDetailContainer>
        <p>DESCRIPCION DEL PRODUCTO</p>
      </ItemDetailContainer>
    </div>
  );
}

export default App;
