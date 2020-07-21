/** @format */
import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones.test.js', () => {
	test('getUser debe de retornar un objeto', () => {
		const userTest = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};

		const user = getUser();

		//toEquals compara objetos
		expect(user).toEqual(userTest);

		console.log(user);
	});

	test('getUsuarioActivo debe de retornar un objeto', () => {
		const nombre = 'carlos';
		const usuarioActivo = getUsuarioActivo(nombre);

		const userTest = {
			uid: 'ABC567',
			username: nombre,
		};

		expect(usuarioActivo).toEqual(userTest);
		console.log(usuarioActivo);
	});
});
