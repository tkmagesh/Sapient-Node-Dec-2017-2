var http = require('http'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler');
	notFoundHandler = require('./notFoundHandler'),
	logger = require('./logger');


var server = http.createServer(function(req, res){
	dataParser(req);
	logger(req);
	serveStatic(req, res);
	calculatorHandler(req, res);
	notFoundHandler(res);
});

server.listen(8080);

console.log('server listening on 8080!');