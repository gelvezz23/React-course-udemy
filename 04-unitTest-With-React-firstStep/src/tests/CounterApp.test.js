/** @format */
import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Prueba a <CounterApp/>', () => {
	let wrapper = shallow(<CounterApp />);

	// en jest hay una especie de ciclo de vida llamado beforeEach()

	beforeEach(() => {
		// esto se ejecutara por cada prueba osea siempre que inicia una prueba
		// el se ejecuta con ella
		wrapper = shallow(<CounterApp />);
	});

	test('debe demostrar que <CounterApp/> renderice bien', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar el valor por defecto de 100', () => {
		const value = 100;
		const wrapper = shallow(<CounterApp value={value} />);
		const valor = wrapper.find('h2').text().trim();

		expect(valor).toBe('100');
	});

	test('Debe de incrementar al oprimir boton +1', () => {
		//.at(posicion en donde esta la etiqueta) es para buscar por posicion

		//.simulate('evento', {parametros}) sirve para simular un click en este boton
		const btn1 = wrapper.find('button').at(0).simulate('click');
		const valor = wrapper.find('h2').text().trim();

		expect(valor).toBe('24');
		// para leerlo es con .text o .html
		//console.log(btn1);
	});

	test('Debe de decrementar al oprimir boton -1', () => {
		//.at(posicion en donde esta la etiqueta) es para buscar por posicion

		//.simulate('evento', {parametros}) sirve para simular un click en este boton
		const btn2 = wrapper.find('button').at(2).simulate('click');
		console.log(btn2.text());
		const valor = wrapper.find('h2').text().trim();

		expect(valor).toBe('22');
		// para leerlo es con .text o .html
	});

	test('Debe de colocar el valor por defecto al dar click en btn reset', () => {
		const wrapper = shallow(<CounterApp value={100} />);
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(1).simulate('click');

		const valor = wrapper.find('h2').text().trim();
		expect(valor).toBe('100');
	});
});
