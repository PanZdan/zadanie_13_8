var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function(request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			if (err) throw err;
			response.write(data);
			response.end();
		})
	} else {
		response.writeHead(200, {
			"Content-Type": "image/png"
		});
		response.statusCode = 404;
		fs.readFile('./pexels.png', 'binary', function(err, data) {
			if (err) throw err;
			response.write(data, "binary");
			response.end();
		});
	}
});
server.listen(8080);