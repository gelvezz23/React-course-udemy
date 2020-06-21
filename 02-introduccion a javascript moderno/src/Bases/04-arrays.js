/** @format */

// este arreglo no es recomendable
//arreglo de 100 posiciones
const arreglo = new Array(100);

// agregando 1 al arreglo
arreglo.push(1);
console.log(arreglo);

const nuevoArreglo = [];
//No es recomendable usar en push porque modifica nuestra objeto principal
nuevoArreglo.push(1);
nuevoArreglo.push(2);
nuevoArreglo.push(3);

console.log(nuevoArreglo);

// esta es una mejor forma
//operador spread
let nuevoArreglo2 = [...nuevoArreglo, 4];

console.log(nuevoArreglo2);

//Recorrer un arreglo
// si modifico este arreglo solo el va a ser modificado
const arreglo3 = nuevoArreglo2.map((numero) => {
	return numero * 2;
});

console.log(arreglo3);
