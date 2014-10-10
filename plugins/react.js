var request = require('request');

exports.register = function (plugin, options, next) {
	plugin.route({
		method: 'GET',
		path: '/react',
		handler: function(req, reply) {
			request('http://0.0.0.0:3000/api/path', function(error, response, body) {
				console.log(body);
				var reactComponent = require('../compiled-components/react');
				reply(reactComponent(body));				
			});
		}
	});

	next();
}

exports.register.attributes = {
	name: 'React plugin'
}