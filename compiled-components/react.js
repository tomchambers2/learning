/** @jsx React.DOM */
var React = require('react');

var Component = React.createClass({displayName: 'Component',
	render: function() {
		return (
			React.DOM.div({className: "main"}, 
				"The data is: ", this.props.data
			)
		);
	}
});

module.exports = function(data) {
	return React.renderComponentToString(Component({data: data}));
};

