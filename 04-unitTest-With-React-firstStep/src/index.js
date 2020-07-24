/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

// reactDOM tiene un metodo llamado render
// este metodo recibe dos parametros ( lo que voy a hacer, y donde lo quiero hacer)
// ReactDOM.render(<CounterApp value={23} />, divRoot);
ReactDOM.render(<PrimeraApp saludo={'hola '} />, divRoot);
