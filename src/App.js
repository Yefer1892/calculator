import './App.css';
import Boton from './components/boton';
import Display from './components/display';
import ClearButton from './components/clearBotom';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const inputAdd = value => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('aja y el numero');
    }
  };

  return (
    <div className='App'>
      <div className='main--container'>
        <h1>Calculadora</h1>
      </div>
      <div className='calculator--container'>
        <Display input={input}/>
        <div className='fila'>
          <Boton manejarClick={inputAdd}>1</Boton>
          <Boton manejarClick={inputAdd}>2</Boton>
          <Boton manejarClick={inputAdd}>3</Boton>
          <Boton manejarClick={inputAdd}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={inputAdd}>4</Boton>
          <Boton manejarClick={inputAdd}>5</Boton>
          <Boton manejarClick={inputAdd}>6</Boton>
          <Boton manejarClick={inputAdd}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={inputAdd}>7</Boton>
          <Boton manejarClick={inputAdd}>8</Boton>
          <Boton manejarClick={inputAdd}>9</Boton>
          <Boton manejarClick={inputAdd}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calculateResult}>=</Boton>
          <Boton manejarClick={inputAdd}>0</Boton>
          <Boton manejarClick={inputAdd}>.</Boton>
          <Boton manejarClick={inputAdd}>/</Boton>
        </div>
        <div className='fila'>
          <ClearButton manejarClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
