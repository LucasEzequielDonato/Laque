import React from 'react';
import Button from '@mui/material/Button';
import './NavBar.css';
import Logo from "./logo-laque.webp";
import Carrito from "../cartwidget/CartWidget";

function NavBar() {
    return (
      <div className="NavBar">
        <header className="header">
            <div className="header-container-logo">
                <img src={Logo} alt="Logo laque"></img>
            </div>
            <div className='header-container-navbar'>
                <ul className='navbar'>
                    <li><Button variant="outlined" color="secondary" className='button'><a href="#inicio">INICIO</a></Button></li>
                    <li><Button variant="outlined" color="secondary" className='button'><a href="#inicio">PRODUCTOS</a></Button></li>
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