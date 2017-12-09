module.exports = function(req, res, next){
	if (!response.finished){
		res.statusCode = 404;
		res.end();
	}
	next();
}