/** @format */

import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {
	test('debe retornar un heroe por id', () => {
		const id = 1;

		const heroe = getHeroeById(id);

		const heroeData = heroes.find((h) => h.id === id);

		expect(heroe).toEqual(heroeData);
		console.log(heroe);
	});
	//podemos validar errores tambien
	test('debe retornar undefined si heroe no existe', () => {
		const id = 10;

		const heroe = getHeroeById(id);

		// const heroeData = heroes.find((h) => h.id === id);
		// undefined es un parametro primitivo por lo tanto se usa el .toBe
		expect(heroe).toBe(undefined);
		console.log(heroe);
	});

	test('debe retornar heroes de DC', () => {
		const owner = 'DC';

		const heroe = getHeroesByOwner(owner);

		const heroeData = heroes.filter((heroe) => heroe.owner === owner);
		// undefined es un parametro primitivo por lo tanto se usa el .toBe
		expect(heroe).toEqual(heroeData);
		console.log(heroe);
	});

	test('debe retornar un arreglo con heroes de marvel', () => {
		const owner = 'Marvel';

		const heroe = getHeroesByOwner(owner);

		const heroeData = heroes.filter((heroe) => heroe.owner === owner);
		// undefined es un parametro primitivo por lo tanto se usa el .toBe
		expect(heroe.length).toBe(heroeData.length);
		console.log(heroe);
	});
});
