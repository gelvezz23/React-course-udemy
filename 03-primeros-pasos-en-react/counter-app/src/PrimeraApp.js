/** @format */

import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {
	return (
		// este es un fragment abreviado
		<>
			{/* se puede hacer asi pero no se usa <h1>{props.saludo}</h1> */}
			<h1>{saludo}</h1>
			<p>{subtitulo}</p>
		</>
	);
};

// obligo a que los props tengan valores y envien datos con tipos de datos

PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired,
};

// que mis props tengan valores por defecto
PrimeraApp.defaultProps = {
	subtitulo: 'Soy un subtitulo por defecto',
};

export default PrimeraApp;
