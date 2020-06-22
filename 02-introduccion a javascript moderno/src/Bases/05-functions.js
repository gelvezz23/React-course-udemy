/** @format */

// esta forma no es la mejor
function saludar(nombre) {
	return `Hola ${nombre}`;
}
// de esta forma no se puede cambiar los valores de esta funcion
const saludar2 = function (nombre) {
	return `Hola ${nombre}`;
};

// funcion de flecha o lamda
const saludar3 = (nombre) => {
	return `Hola ${nombre}`;
};

const getUser = () => {
	return {
		uid: 'ABC123',
		username: 'gelvezz23',
	};
};
// return explicito
const getUser2 = () => ({
	uid: 'ABC123',
	username: 'gelvezz23',
});

// funcion flecha simplificada
// solo si tiene un return
const saludar4 = (nombre) => `Hola ${nombre}`;

console.log(saludar('carlos'));
console.log(saludar2('carlos'));
console.log(saludar3('carlos'));
console.log(saludar4('carlos'));
console.log(getUser());

//Tarea
// 1. Transformar a arrow function
// 2. Tiene que tener return expli
// 3. Pruebas

function getUserActivo(nombre) {
	return {
		uid: 'ABC567',
		username: nombre,
	};
}

const usuarioActivo = getUserActivo('carlos');
console.log(usuarioActivo);

// solucion
//funcion flecha

// const getUserActivo = (nombre) => {
// 	return {
// 		uid: 'ABC567',
// 		username: nombre,
// 	};
// };

// return explici
// const getUserActivo = (nombre) => ({
// 	uid: 'ABC567',
// 	username: nombre,
// });
