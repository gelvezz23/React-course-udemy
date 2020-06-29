/** @format */

//Desestructuracion
//Asignacion Desestructurante

const persona = {
	nombre: 'carlos',
	edad: 23,
	clave: 'algoritmo',
	ocupacion: 'frotend dev',
};

const { nombre, edad, clave } = persona;
// Renombrar nombre no puedo usar nombre despues
const { nombre: nombre2 } = persona;

// destructurado desde los paramtros
const getUsuario = ({ nombre, edad, clave }) => {
	console.log(nombre, edad);
};

// valores de un parametro por defecto
const getUsuario2 = ({ nombre, edad, clave, ocupacion = 'no tiene' }) => {
	console.log(nombre, edad, clave);
	console.log(ocupacion);
};

const useContext = ({ nombre, edad, clave, ocupacion = 'no tiene' }) => {
	return {
		nombreClave: clave,
		ocupacion: ocupacion,
		latlng: {
			lat: 12.1312,
			lng: -7.2232,
		},
	};
};

getUsuario(persona);

// podemos extraer obejetos dentro de un objeto latlng :{lat, lng}
// esto es poco comun
const {
	nombreClave,
	ocupacion,
	latlng: { lat, lng },
} = useContext(persona);
// asi es mas comun
// const { nombreClave, ocupacion, latlng } = useContext(persona);
// const {lat, lng } = latlng;

console.log(nombreClave, ocupacion);

console.log(lat, lng);
