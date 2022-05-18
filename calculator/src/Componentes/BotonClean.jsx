import React from 'react';
import '../Styles/BotonClear.css'

function BotonClean (props) {
    return (
      <div className='btnClear'
      onClick={props.manejarClear}>
        {props.children}
      </div>
    );
};

export default BotonClean;