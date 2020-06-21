/** @format */

// esto es un objeto que puede ser tambien un diccionario
const persona = {
	nombre: 'Carlos',
	apellido: 'Gomez',
	edad: 23,
	direccion: {
		ciudad: 'Cucuta',
		zip: 540004,
		lat: 14.3121,
		lng: -7.0008,
	},
};

//console.log({persona:persona})
console.log({ persona });

//console.log({persona})
// se muestran en orden alfabetico
console.log(persona);

//otra forma de imprimir un objeto
console.table(persona);

// const persona2 = persona;

// como clonar el objeto
// destructuring
const persona2 = { ...persona };

// Esto no se debe hacer
persona2.nombre = 'No se otro';

console.log(persona2);
