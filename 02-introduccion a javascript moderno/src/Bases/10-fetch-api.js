/** @format */

const key = 'OGQ06BtQ53R6QGAxD15WKM9ognm9izX2';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${key}`);

peticion
	.then((resp) => resp.json())
	.then(({ data }) => {
		const { url } = data.images.original;
		console.log(url);

		// vamosa a imprimir la imagen

		const img = document.createElement('img');
		img.src = url;

		document.body.append(img);
	})
	.catch(console.warn);

// esta es una forma
// resp.json().then((data) => {
// 	console.log(data);
// });
