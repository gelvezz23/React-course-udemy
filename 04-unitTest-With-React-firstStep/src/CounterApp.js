/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CounterApp({ value }) {
	const [counter, setCounter] = useState(value);

	const handleAdd = () => {
		// la instruccion counter++ es igual a counter = counter + 1
		// esa forma no funciona

		setCounter(counter + 1);
		// otra forma de hacerlo
		//setCounter((c) => c + 1);
	};

	const handleLess = () => {
		setCounter(counter - 1);
	};

	const handleReset = () => {
		setCounter(value);
	};

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>
			<button onClick={handleAdd}> +1 </button>
			<button onClick={handleReset}>reset </button>
			<button onClick={handleLess}>-1</button>
		</>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number,
};

export default CounterApp;
