var Hapi = require('hapi');
var plugin = require('./plugins/api');
var react = require('./plugins/react')
var pack = new Hapi.Pack();
var server = new Hapi.Server(3000);

var errorHandler = function(err) {
	if (err) {
		console.log('Failed loading plugin');
	}
}

server.start(function() {
	console.log('Server running at:', server.info.uri);
});

server.pack.register(plugin, errorHandler);
server.pack.register(react, errorHandler);