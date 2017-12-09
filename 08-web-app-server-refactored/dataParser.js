var url = require('url');

module.exports = function(req){
	var urlObj = url.parse(req.url);
	urlObj.pathname = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname;
	req.urlObj = urlObj;
}