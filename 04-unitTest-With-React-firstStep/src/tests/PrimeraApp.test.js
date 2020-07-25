/** @format */
import React from 'react';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp/>', () => {
	// test('Debe de mostrar el mensaje hola', () => {
	// 	const saludo = 'hola';
	// 	// es una funcion de jest que recibe un componente
	// 	// getByText es un metodo de render
	// 	const { getByText } = render(<PrimeraApp saludo={saludo} />);

	// 	// sin destructurar wrapper = render(<PrimeraApp saludo={saludo} />);

	// 	//sin usar inzame
	// 	expect(getByText(saludo)).toBeInTheDocument();
	// });

	test('Debe mostrar <PrimeraApp/> correctamente', () => {
		const saludo = 'hola';

		const wrapper = shallow(<PrimeraApp saludo={saludo} />);

		expect(wrapper).toMatchSnapshot();
	});
});
