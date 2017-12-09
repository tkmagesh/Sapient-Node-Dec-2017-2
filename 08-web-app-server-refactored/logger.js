module.exports = function(req){
	console.log(req.method + '\t' + req.urlObj.pathname);
}