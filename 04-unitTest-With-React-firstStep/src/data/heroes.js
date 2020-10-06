/** @format */

const heroes = [
	{
		id: 1,
		name: 'Batman',
		owner: 'DC',
	},
	{
		id: 2,
		name: 'Spiderman',
		owner: 'Marvel',
	},
	{
		id: 3,
		name: 'Superman',
		owner: 'DC',
	},
	{
		id: 4,
		name: 'Flash',
		owner: 'DC',
	},
	{
		id: 5,
		name: 'Wolverine',
		owner: 'Marvel',
	},
];

// exportacion individual
export const owners = ['DC', 'Marvel'];

export default heroes;

//otra forma de hacerlo

/**
 *  const owners = ['DC', 'Marvel'];
 * export {
 * heroes,
 * owners
 * }
 */
// para decir le cual es por defecto
/**
 *  const owners = ['DC', 'Marvel'];
 * export {
 * heroes,
 * owners as default
 * }
 */
