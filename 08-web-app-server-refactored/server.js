var http = require('http'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler');
	notFoundHandler = require('./notFoundHandler'),
	logger = require('./logger');

var _middlewares = [dataParser, logger, serveStatic, calculatorHandler, notFoundHandler];


var server = http.createServer(function(req, res){
	function exec(req, res, fns){
		var first = fns[0],
			remaining = fns.slice(1),
			next = function(){
				exec(req, res, remaining);
			};
		if (typeof first === 'function')
			first(req, res, next);
	}
	exec(req, res, _middlewares);
});

server.listen(8080);

console.log('server listening on 8080!');