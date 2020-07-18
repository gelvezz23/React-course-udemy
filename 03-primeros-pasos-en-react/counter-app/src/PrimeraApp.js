/** @format */

import React, { Fragment } from 'react';

const PrimeraApp = () => {
	// para imprimirt variables

	const saludar = 'hola mundo con una variable ';
	const variable = 123;
	const variable2 = 123.123;
	const variable3 = true;
	const variable4 = [1, 2, 3, 4, 5, 6, 7];
	const variable5 = { nombre: 'Carlos', edad: 23 };

	return (
		// este es un fragment abreviado
		<>
			<h1>{saludar}</h1>
			<p>Un saludo con variables</p>
			<h1>{variable}</h1>
			<p>imprimir numeros</p>

			<h1>{variable2}</h1>
			<p>imprimir decimales</p>

			{/* Los booleanos no los imprime */}
			<h1>{variable3}</h1>
			<p>imprimir booleanos (no se ve)</p>

			{/* Al imprimir un array los ordena y los concatena */}
			<h1>{variable4}</h1>
			<p> imprimir un array </p>

			{/* Si queremos imprimir un objeto debemos parsarlo a json y luego 
                imprimirlo
            */}
			<pre>{JSON.stringify(variable5, null, 3)}</pre>
			<p>imprimir un objeto</p>

			{/* Esto esta bien pero el div es informacion que no necesitamos */}
			<div>
				<h1>Hola mundo con div</h1>
				<p> mi primera aplicacion</p>
			</div>
			{/* para corregir esto usamos el Fragment <></> */}
			<Fragment>
				<h1>Hola mundo con fragment</h1>
				<p> mi primera aplicacion</p>
			</Fragment>
		</>
	);
};

export default PrimeraApp;
