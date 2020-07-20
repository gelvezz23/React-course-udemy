/** @format */

//ayudas para el autocompletado en jest
import '@testing-library/jest-dom';

import { getSaludo } from './../../base-pruebas/02-template-string';

describe('pruebas en archivo 02-template-string.js', () => {
	// hya muchas formas de darle un nombre a la prueba
	// test(Prueba function getSaludo)
	// test(debe retornar hola y el nombre)
	test('getSaludo debe retornar hola carlos', () => {
		const nombre = 'carlos';
		const saludo = getSaludo(nombre);
		console.log(saludo);

		// la prueba puede pasar sin tener esta linea
		expect(saludo).toBe('Hola ' + nombre);
	});

	test('getSaludo debe retornar Hola fernando cuando no envia nada', () => {
		const saludo = getSaludo();
		console.log(saludo);
		expect(saludo).toBe('Hola fernando');
	});

	// en llegado caso que yo no envie ningun parametro debe retornar hola fernando
});
