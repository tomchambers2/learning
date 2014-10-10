/** @jsx React.DOM */
var React = require('react');

var Component = React.createClass({
	render: function() {
		return (
			<div className="main">
				The data is: {this.props.data}
			</div>
		);
	}
});

module.exports = function(data) {
	return React.renderComponentToString(<Component data={data} />);
};

