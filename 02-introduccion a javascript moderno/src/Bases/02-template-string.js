/** @format */

const nombre = 'carlos';
const apellido = 'gomez';

//template string normal
const nombreCompleto = ` ${nombre} ${apellido} `;
console.log(nombreCompleto);

//Con saltos de linea
const nombreCompletoConSaltos = `
${nombre}
${apellido}
`;
console.log(nombreCompletoConSaltos);

//Uso con funciones
function getSaludo(nombre) {
	return 'Hola ' + nombre;
}

console.log(`Esto es un texto: ${getSaludo(nombre)}`);
