module.exports = function(req, res, next){
	console.log('[@notFoundHandler] statuscode = ', res.statusCode);
	console.log('[@notFoundHandler] serving 404');
	res.statusCode = 404;
	res.end();
	next();
}