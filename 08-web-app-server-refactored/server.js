var http = require('http'),
	path = require('path'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler');
	notFoundHandler = require('./notFoundHandler'),
	logger = require('./logger'),
	app = require('./app');


app.use(dataParser);
app.use(logger);
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8085);

console.log('server listening on 8085!');