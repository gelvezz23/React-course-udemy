/** @format */

// test(nombre de algo, y una funcion flecha )

test('debe ser true', () => {
	const active = true;

	// normalmente no se escriben estas condiciones
	if (active) {
		throw new Error('No esta activo');
	}
});
