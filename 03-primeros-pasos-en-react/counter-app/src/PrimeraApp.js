/** @format */

import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo }) => {
	return (
		// este es un fragment abreviado
		<>
			{/* se puede hacer asi pero no se usa <h1>{props.saludo}</h1> */}
			<h1>{saludo}</h1>
			<p>esto es una props con destructuracion</p>
		</>
	);
};

PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
