var http = require('http'),
	path = require('path'),
	fs = require('fs'),
	url = require('url');

var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url);
	console.log(req.method + '\t' + urlObj.pathname);
	var resourceName = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname;

	var resourcePath = path.join(__dirname, resourceName);
	if (!fs.existsSync(resourcePath)){
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(resourcePath);
	/*
	stream.on('data', function(chunk){
		res.write(chunk);
	});
	stream.on('end', function(){
		res.end();
	});
	*/
	stream.pipe(res);
});

server.listen(8080);

console.log('server listening on 8080!');