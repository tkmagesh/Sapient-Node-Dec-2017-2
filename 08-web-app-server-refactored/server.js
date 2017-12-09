var http = require('http'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler');
	notFoundHandler = require('./notFoundHandler'),
	logger = require('./logger'),
	app = require('./app');


app.use(dataParser);
app.use(logger);
app.use(serveStatic);
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);

console.log('server listening on 8080!');