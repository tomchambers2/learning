exports.register = function (plugin, options, next) {
	plugin.route({
		method: 'GET',
		path: '/api/path',
		handler: function(request, reply) {
			reply("Hello world");
		}
	});

    next();
};

exports.register.attributes = {
    name: 'API plugin'
};