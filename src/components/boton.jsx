
import React from 'react'
import '../stylesheets/boton.css'

function Boton(props) { 

  const isOperation = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }
  return (
    <div
      className={`container--button ${isOperation(props.children) ? 'operation' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;