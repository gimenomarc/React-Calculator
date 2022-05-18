import React from 'react';
import '../Styles/Boton.css'

function Boton (props) {
    return (
      <div 
      className='btn'
      onClick={() => props.manejarClick(props.children)}>
        {props.children}
      </div>
    );
};

export default Boton;