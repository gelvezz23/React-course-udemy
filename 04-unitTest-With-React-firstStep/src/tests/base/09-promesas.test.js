/** @format */

import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';
import heroes from './../../data/heroes';

describe('Pruebas asincronas ', () => {
	// el parametro done sirve para pruebas asincronas
	test('Debe retornar un heroe async', (done) => {
		const id = 1;

		getHeroeByIdAsync(id).then((heroe) => {
			console.log(heroe);
			expect(heroe).toBe(heroes[0]);
			done();
		});
	});

	test('Debe dar un error si el heroe no existe', (done) => {
		const id = 10;

		getHeroeByIdAsync(id).catch((error) => {
			expect(error).toBe('No se pudo encontrar el héroe');
			// debe poner se el done para decir que ya acabo la promesa
			done();
		});
	});
});
