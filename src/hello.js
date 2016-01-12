var _ = require('lodash');

module.exports = function sayHello(to) {
	if (to) return _.template("Hello, <%= name %>!")({name: to});
	else return "Hello, world!";
};