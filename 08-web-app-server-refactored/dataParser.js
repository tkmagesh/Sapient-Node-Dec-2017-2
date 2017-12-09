var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	var urlObj = url.parse(req.url);
	urlObj.pathname = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname;
	req.urlObj = urlObj;
	req.query = querystring.parse(req.urlObj.query);
	if (req.method !== 'GET'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			req.body = querystring.parse(rawData);
			next();
		});
	} else {
		next();
	}
}