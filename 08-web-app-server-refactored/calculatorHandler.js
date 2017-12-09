var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res){
	if (req.urlObj.pathname === '/calculator' && req.method === 'GET'){
		var data = querystring.parse(req.urlObj.query),
			n1 = parseInt(data.n1),
			n2 = parseInt(data.n2),
			op = data.op;

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (req.urlObj.pathname === '/calculator' && req.method === 'POST'){
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
		});
	}
}