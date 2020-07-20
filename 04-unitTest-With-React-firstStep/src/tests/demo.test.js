/** @format */

// describe agrupar las pruebas

describe('Pruebas en el archivo demo.test.js', () => {
	// test(nombre de algo, y una funcion flecha )
	test('deben de ser iguales los strings', () => {
		// 1. inicializacion
		const mensaje = 'Hola mundo';

		//2. estimulo
		const mensaje2 = 'Hola mundo';

		//3. observa el comportamiento
		// expect (Valor inicial)
		// .toBe <= compara con el otro valor
		// .toBe( valor a comparar)
		expect(mensaje).toBe(mensaje2);
	});
});
