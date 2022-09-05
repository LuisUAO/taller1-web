import React from 'react';
import ReactDOM from 'react-dom/client';
import Saludo from './componentes/saludo';
import Horas from './componentes/horas';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Llamadas from './componentes/llamadas';
import Mismos from './componentes/mismos';
import Ordenado from './componentes/ordenado';
import Impares from './componentes/impares';
import Salarios from './componentes/salarios';
import Aleatorios from './componentes/aleatorios';
import Tabla from './componentes/tabla';
import Total from './componentes/total';
import Nota from './componentes/nota';
import Notas from './componentes/notas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className='container'>
      <div className='box'><Horas></Horas></div>
      <div className='box'><Saludo></Saludo></div>
      <div className='box'><Llamadas></Llamadas></div>
      <div className='box'><Mismos></Mismos></div>
      <div className='box'><Ordenado></Ordenado></div>
      <div className='box'><Impares></Impares></div>
      <div className='box'><Salarios></Salarios></div>
      <div className='box'><Aleatorios></Aleatorios></div>
      <div className='box'><Tabla></Tabla></div>
      <div className='box'><Total></Total></div>
      <div className='box'><Nota></Nota></div>
      <div className='box'><Notas></Notas></div>
    </div>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
