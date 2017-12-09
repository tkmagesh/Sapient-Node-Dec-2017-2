var fs = require('fs'),
	path = require('path');

var staticResExtns = ['.html', '.js', '.css', '.xml', '.jpg', '.png', '.json', '.ico'];

function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
	var resourceName = req.urlObj.pathname;
	if (isStatic(resourceName)){
		var resourcePath = path.join(__dirname, resourceName);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resourcePath);
		stream.pipe(res);
	}
}