// Esto se puede sacar a otro archivo
const fs = require('fs');

const { movies } = JSON.parse(fs.readFileSync(__dirname + '/../data/movies.json', 'utf-8'));
// Esto se puede sacar a otro archivo

let masVotadas = movies.filter(function (unaPelicula) {
	return unaPelicula.vote_average >= 7;
});

let content = `Más Votadas \n\n\n`;
content += `Total del películas: ${masVotadas.length}\n\n`;

let ratingTotal = masVotadas.reduce(function (acumulador, unaPelicula) {
	return acumulador + unaPelicula.vote_average;
}, 0);

// https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
let ratingPromedio = Math.round((ratingTotal / masVotadas.length) * 100) / 100;

content += `Rating promedio: ${ratingPromedio}\n\n`;

masVotadas.forEach(function (unaPelicula) {
	content += `TÍTULO: ${unaPelicula.title} \nRESEÑA: ${unaPelicula.overview}\n\n\n`;
});

module.exports = content;