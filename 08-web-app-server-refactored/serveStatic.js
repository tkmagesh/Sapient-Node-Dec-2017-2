var fs = require('fs'),
	path = require('path');

var staticResExtns = ['.html', '.js', '.css', '.xml', '.jpg', '.png', '.json', '.ico'];

function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(staticPath){
	return function(req, res, next){
		var resourceName = req.urlObj.pathname;
		var resourcePath = path.join(staticPath, resourceName);
		if (isStatic(resourceName) && fs.existsSync(resourcePath)){
			var stream = fs.createReadStream(resourcePath);
			stream.pipe(res);
			stream.on('end', next);
		} else {
			next();
		}
	};
}