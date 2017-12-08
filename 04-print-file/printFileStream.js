var fs = require('fs');

var stream = fs.createReadStream('test.txt', {encoding : 'utf8'});

var readCount = 0;

stream.on('data', function(chunk){
	++readCount;
	console.log(chunk);
});

stream.on('end', function(){
	console.log('------------------thats all folks!----------------------');
});

stream.on('close', function(){
	console.log('file read with ' + readCount + ' readCounts');
});

stream.on('error', function(err){
	console.log('something went wrong!!');
});