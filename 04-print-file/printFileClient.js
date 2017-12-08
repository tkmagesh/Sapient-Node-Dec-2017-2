var printFile = require('./printFile');

printFile(function(contents){
	console.log('[@printFileClient] contents = ', contents);
});
console.log('initiated printFile operation');