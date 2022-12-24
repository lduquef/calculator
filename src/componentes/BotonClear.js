import React from "react";
import '../style-sheets/BotonClear.css'
const BotonClear = (props) => (
  <div 
    className="Boton-clear"  
    onClick={props.manejarClear}>
  	{props.children}
  </div>
);
export default BotonClear