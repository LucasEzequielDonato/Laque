import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemList from "./components/itemlistcontainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemList>
        <p>PRODUCTOS DESTACADOS</p>
      </ItemList>
    </div>
  );
}

export default App;
