/** @format */

import React from 'react';
import PropTypes from 'prop-types';

function CounterApp({ value }) {
	return (
		<>
			<h1>CounterApp</h1>
			<h2>{value}</h2>
		</>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number,
};

export default CounterApp;
