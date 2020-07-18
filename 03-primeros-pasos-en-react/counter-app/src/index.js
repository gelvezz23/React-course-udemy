/** @format */

import React from 'react';
import ReactDOM from 'react-dom';

const divRoot = document.querySelector('#root');

const saludar = <h1>Hola mundo</h1>;

// reactDOM tiene un metodo llamado render
// este metodo recibe dos parametros ( lo que voy a hacer, y donde lo quiero hacer)
ReactDOM.render(saludar, divRoot);
