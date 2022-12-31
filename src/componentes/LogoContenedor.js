import React from "react";
import "../style-sheets/LogoContenedor.css"
import logo from "../imagenes/freecodecamp-logo.png"
function LogoContenedor() {
    return(
    <div className='logo-contenedor'>
      <img
      src= {logo}
      className='logo'
      alt='logo page'/>
    </div>
    );
}

export default LogoContenedor