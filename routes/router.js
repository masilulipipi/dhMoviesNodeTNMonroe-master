// require de las secciones del sitio
const siteContent = require('../src/index');

const rutas = {
	chooseRoute: function (req, res) {
		switch (req.url) {
			// HOME
			case '/':
				res.end(siteContent.homeContent);
				break;

			// MÁS VOTADAS
			case '/mas-votadas':
				res.end(siteContent.moreVoteContent);
				break;

			// CONTACTO
			case '/contacto':
				res.end(siteContent.contactContent);
				break;

			// 404 NOT FOUND
			default:
				res.end('404 not found - ¡No encontrado!');
		}
	}
}

module.exports = rutas;
