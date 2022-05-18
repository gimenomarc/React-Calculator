import React from 'react';
import '../Styles/Boton.css'

function Boton (props) {

  const itsOperator = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

    return (
      <div 
      className={`btn ${itsOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
        {props.children}
      </div>
    );
};

export default Boton;