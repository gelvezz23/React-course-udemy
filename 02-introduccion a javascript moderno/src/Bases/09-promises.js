/** @format */

import { getHeroeByIdShort } from './Bases/08-import-export';

// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		//Tarea importar el metodo getHeroeByid de la clase pasada
// 		const heroe = getHeroeByIdShort(2);
// 		//console.log(heroe);
// 		//resolve(heroe);
// 		reject('No se pudo obtener el heroe');
// 		// console.log('2 segundos despues');
// 		// resolve();
// 	}, 2000);
// });

// //then :
// // catch : dio un error
// // finally : se ejecuta a lo ultimo

// promesa
// 	.then((heroe) => {
// 		console.log(heroe);
// 	})
// 	.catch((err) => {
// 		console.log('Error : ' + err);
// 	});

const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			//Tarea importar el metodo getHeroeByid de la clase pasada
			const heroe = getHeroeByIdShort(id);
			//console.log(heroe);

			heroe ? resolve(heroe) : reject('No se encontro heroe');
			//reject('No se pudo obtener el heroe');
			// console.log('2 segundos despues');
			// resolve();
		}, 2000);
	});
};
getHeroeByIdAsync(1)
	.then((heroe) => console.log('Heroe : ', heroe))
	.catch((err) => {
		console.war('Error: ', err);
	});

//Otra forma de hacerlo
getHeroeByIdAsync(20).then(console.log).catch(console.war);
