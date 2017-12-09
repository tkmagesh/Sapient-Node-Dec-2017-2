var http = require('http'),
	path = require('path'),
	fs = require('fs'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticResExtns = ['.html', '.js', '.css', '.xml', '.jpg', '.png', '.json', '.ico'];

function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url);
	console.log(req.method + '\t' + urlObj.pathname);
	var resourceName = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname;

	//serving static resources
	if (isStatic(resourceName)){
		var resourcePath = path.join(__dirname, resourceName);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resourcePath);
		stream.pipe(res);
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var data = querystring.parse(urlObj.query),
			n1 = parseInt(data.n1),
			n2 = parseInt(data.n2),
			op = data.op;

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			var data = querystring.parse(rawData),
				n1 = parseInt(data.n1),
				n2 = parseInt(data.n2),
				op = data.op;

			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		})
		
	} else {
		res.statusCode = 404;
		res.end();
	}
	
});

server.listen(8080);

console.log('server listening on 8080!');