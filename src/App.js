import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
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
        <Route path='/productos/:titulo' element={<Productos/>}/>
        <Route path='/producto/:id' element={<Producto/>}/>
        <Route path='/cart' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
