///calculator?op=add&n1=100&n2=100

var http = require('http'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url);
	console.log(req.method + '\t' + urlObj.pathname);
	if (urlObj.pathname !== '/calculator'){
		res.statusCode = 404;
		res.end();
		return;
	}
	var data = querystring.parse(urlObj.query),
		n1 = parseInt(data.n1),
		n2 = parseInt(data.n2),
		op = data.op;

	var result = calculator[op](n1, n2);
	res.write(result.toString());
	res.end();
});

server.listen(8080);

console.log('server listening on 8080!');