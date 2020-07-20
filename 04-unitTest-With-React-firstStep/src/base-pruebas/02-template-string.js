/** @format */

const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log( nombreCompleto );
// debo esportar lo para usarlo
export function getSaludo(nombre = 'fernando') {
	return 'Hola ' + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
