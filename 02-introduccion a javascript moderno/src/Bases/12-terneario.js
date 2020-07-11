/** @format */

const activo = true;

//const mensaje = activo ? 'Activo' : 'Inactivo';
//const mensaje = activo ? 'Activo' : null;

//otra forma de if terneario
// esta es solo ejecutar el if sin el else
const mensaje = activo && 'Activo';
console.log(mensaje);
