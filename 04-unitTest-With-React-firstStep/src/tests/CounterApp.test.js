/** @format */
import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Prueba a <CounterApp/>', () => {
	test('debe demostrar que <CounterApp/> renderice bien', () => {
		const valuee = 23;

		const wrapper = shallow(<CounterApp value={valuee} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar el valor por defecto de 100', () => {
		const value = 100;

		const wrapper = shallow(<CounterApp value={value} />);
		const valor = wrapper.find('h2').text().trim();

		expect(valor).toBe('100');
	});
});
