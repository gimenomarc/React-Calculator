import React from 'react';
import '../Styles/Boton.css'

function Boton (props) {
    return (
      <div className='btn'>
        {props.children}
      </div>
    );
};

export default Boton;