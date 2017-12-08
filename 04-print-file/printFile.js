var fs = require('fs');

module.exports = function(callback){
	fs.readFile('test.txt', {encoding : 'utf8'}, function(err, fileContents){
		if (err){
			console.log('something went wrong!');
			return;
		}
		setImmediate(function(){
			callback(fileContents);
			console.log('------------------thats all folks!----------------------');
		});
		
	});
}