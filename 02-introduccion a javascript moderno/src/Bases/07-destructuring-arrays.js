/** @format */

const semilleros = ['silux', 'viral', 'data-Science'];

// con f2 puedo cambiar el nombre de referencia
//capturo el primer elemento
const [s1] = semilleros;

//segunddo elemento de semillero
const [, s2] = semilleros;
//tercer valor
const [, , s3] = semilleros;

const retornaArreglo = () => {
	return ['ABC', 123];
};
// obtener los datos de un arreglo
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
// 1 El primer valor del arreglo se llamara nombre
// 2 EL segundo valor se va a llamar setNombre
const useState = (valor) => {
	return [
		valor,
		() => {
			console.log('Hola !!');
		},
	];
};

const arr = useState('Carlos');
const [nombre, setNombre] = arr;

console.log(nombre);
console.log(setNombre());

//Asi llamo una funcion dentro de un array
//pero no es tan bien visto
console.log(arr[1]());
console.log('....');

console.log('posicion 1 : ' + s1);
console.log(s2);
console.log(s3);
