import './App.css';
import Boton from './Componentes/Boton.jsx'
import Pantalla from './Componentes/Pantalla.jsx'
import BotonClean from './Componentes/BotonClean'
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

const [input, setInput] = useState(0);

const addInput = val => {
  setInput(input + val);
};

const calcularResultado = () => {
  if (input) {
    setInput(evaluate(input));
  } else {
    alert('Valores vacios')
  }
}

  return (
    <div className='App'>
      <div className='container-calculadora'>
        <Pantalla input={input}></Pantalla>
        <div className='fila'>
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={addInput}>.</Boton>
          <Boton manejarClick={addInput}>/</Boton>
        </div>
        <BotonClean manejarClear={() => setInput('')}>
          Clear
          </BotonClean>

      </div>
    </div>
  );
}

export default App;
