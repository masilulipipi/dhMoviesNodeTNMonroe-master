const http = require('http');

// Require de el router
const router = require('./routes/router');

// Servidor
http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
		// Route System
		router.chooseRoute(req, res);
	})
	.listen(4040, 'localhost', function () {
		console.log('Server running in 4040 port');
	});