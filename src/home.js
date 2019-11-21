// Esto se puede sacar a otro archivo
const fs = require('fs');

const { movies, total_movies } = JSON.parse(fs.readFileSync(__dirname + '/../data/movies.json', 'utf-8'));
// Esto se puede sacar a otro archivo

let soloTitulos = movies.map(function (unaPelicula) {
	return unaPelicula.title;
});

soloTitulos.sort(); 

let contenidoHome = 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn. \n\n\n';

contenidoHome += `Total de películas en cartelera​: ${total_movies} \n\n\n`;

contenidoHome += `=== Listado de películas === \n\n`;

soloTitulos.forEach(function (unTitulo) {
	contenidoHome += `• ${unTitulo} \n`;
})

contenidoHome += `​\n\nRecordá que podés visitar las secciones: \n• En Cartelera\n• Más Votadas\n• Sucursales\n• Contacto\n• Preguntas Frecuentes`;

module.exports = contenidoHome;