/** @format */
// owners con expoer const
// heroes con export default
import heroes, { owners } from './../data/heroes';

//otra forma
// import  { heroes,owners } from './data/heroes';
console.log(owners);
console.log(heroes);

// Buscar un heroe por id forma larga
const getHeroeById = (id) => {
	return heroes.find((heroe) => {
		if (heroe.id === id) {
			return true;
		} else {
			return false;
		}
	});
};
console.log(getHeroeById(2));

// forma corta y refactorizada
const getHeroeByIdShort = (id) => {
	return heroes.find((heroe) => (heroe.id === id ? true : false));
};
console.log(getHeroeByIdShort(3));

// Refartorizacion aun mas hardcore
//const getHeroeByIdShort = (id) => heroes.find((heroe) => heroe.id === id );

// obtener por owner pero retorna varios con filter
const getHeroeByOwner = (owner) => {
	return heroes.filter((heroe) => (heroe.owner === owner ? true : false));
};
console.log(getHeroeByOwner('DC'));
