/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

const divRoot = document.querySelector('#root');

// reactDOM tiene un metodo llamado render
// este metodo recibe dos parametros ( lo que voy a hacer, y donde lo quiero hacer)
ReactDOM.render(<PrimeraApp saludo='soy una props' />, divRoot);
