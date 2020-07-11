/** @format */

const getImagen = () => {
	return 'http://hola.com';
};

console.log(getImagen());

//ahora lo voy a convertir en una promesa

const getImagenPromise = async () => {
	return ' hola.com';
};

getImagenPromise().then(console.log);

// ahora con un ejemplo mas real

const getImagenReal = async () => {
	try {
		const key = 'OGQ06BtQ53R6QGAxD15WKM9ognm9izX2';

		const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${key}`);
		// el await me dice que espere antes de ejecutar
		// la siguiente linea de codigo si no se ejecuta
		// esta no pasara a la siguiente
		const { data } = await resp.json();
		const { url } = data.images.original;
		const img = document.createElement('img');
		img.src = url;
		document.body.append(img);
		// await solo funciona en promesas
		//return data;

		// tarea mostrar la imagen en el html
	} catch (err) {
		//manejo de errores
		console.error(err);
	}
};
// console.log(getImagenReal());
// tarea mostrar la imagen en el html
// getImagenReal()
// 	.then(({ data }) => {
// 		const { url } = data.images.original;
// 		console.log(url);

// 		// vamosa a imprimir la imagen

// 		const img = document.createElement('img');
// 		img.src = url;

// 		document.body.append(img);
// 	})
// 	.catch(console.warn);

// otra forma de hacerlo
getImagenReal();
