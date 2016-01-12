var sayHello = require('../src/hello');

describe("Hello", function(){

	it("says hello to world", function(){
		expect(sayHello()).toBe("Hello, world!");
	});

	it("says hello to Jane", function(){
		expect(sayHello("Jane")).toBe("Hello, Jane!");
	});

});