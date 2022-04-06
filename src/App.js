import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import HomePage from './pages/Home';
import Productos from './pages/Productos';
import Producto from './pages/Producto';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/producto/:id' element={<Producto/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
