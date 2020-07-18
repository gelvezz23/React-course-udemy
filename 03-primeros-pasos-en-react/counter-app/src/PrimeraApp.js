/** @format */

import React, { Fragment } from 'react';

const PrimeraApp = () => {
	return (
		// este es un fragment abreviado
		<>
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
