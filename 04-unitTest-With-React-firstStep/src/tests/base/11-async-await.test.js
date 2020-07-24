/** @format */

import { getImagen } from '../../base-pruebas/11-async-await';

describe('Prueba de  async y await - fetch', () => {
	test('Debe retornar la url de la imagen como string', async () => {
		const url = await getImagen();
		console.log(url);
		expect(typeof url).toBe('string');
	});

	test('Debe retornar url de la imagen como http', async () => {
		const url = await getImagen();
		console.log(url);
		expect(url.includes('https://')).toBe(true);
	});
});
