import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './NavBar.css';
import Logo from "./logo-laque.webp";
import Carrito from "../cartwidget/CartWidget";

function NavBar() {
    return (
      <div className="NavBar">
        <header className="header">
            <button className="header-container-logo">
                <img src={Logo} alt="Logo laque"></img>
            </button>
            <div className='header-container-navbar'>
                <ul className='navbar'>
                    <li><Link to={'/'}><Button variant="outlined" color="secondary" className='button'>INICIO</Button></Link></li>
                    <li><Link to={'/productos'}><Button variant="outlined" color="secondary" className='button'>PRODUCTOS</Button></Link></li>
                    <li><Link to={'/productos/pantalon'}><Button variant="outlined" color="secondary" className='button'>PANTALONES</Button></Link></li>
                    <li><Link to={'/productos/camisa'}><Button variant="outlined" color="secondary" className='button'>CAMISAS</Button></Link></li>
                    <li><Button variant="outlined" color="secondary" className='button'><a href="#inicio">NOSOTROS</a></Button></li>
                    <li><Button variant="outlined" color="secondary" className='button'><a href="#inicio">CONTACTO</a></Button></li>
                </ul>
            </div>
            <Carrito />
        </header>
      </div>
    );
}
  
export default NavBar;