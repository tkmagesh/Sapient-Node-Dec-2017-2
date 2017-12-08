var http = require('http'),
	path = require('path'),
	fs = require('fs');

var server = http.createServer(function(req, res){
	console.log(req.method + '\t' + req.url);
	var resourcePath = path.join(__dirname, req.url);
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