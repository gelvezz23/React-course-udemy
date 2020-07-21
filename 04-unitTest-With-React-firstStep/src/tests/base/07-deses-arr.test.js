/** @format */

import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Pruebas en desestructuracion', () => {
	test('debe de retornar un arreglo y un numero', () => {
		const [letras, numeros] = retornaArreglo();

		// console.log([letras, numeros]);
		// podemos destructurar
		expect([letras, numeros]).toEqual(['ABC', 123]);

		expect(letras).toBe('ABC');
		expect(typeof letras).toBe('string');

		expect(numeros).toBe(123);
		expect(typeof numeros).toBe('number');
	});
});
