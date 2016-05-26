'use strict';

function getPerson1() {
	var name = 'Jakub';
	var age = 22;
	var ES6 = void 0;

	// ES5 return object syntax
	return {
		name: name,
		age: age,
		ES6: false,
		greet: function greet() {
			return 'Hello, ' + this.name;
		}
	};
}

// Object and Method shorthands
function getPerson2() {
	var name = 'Jakub';
	var age = 22;
	var ES6 = void 0;

	// ES6 syntax - if key and valuea are exactly the same we can omit them!
	return {
		name: name,
		age: age,
		ES6: true,
		greet: function greet() {
			return 'Hello, ' + this.name;
		}
	};
}

console.log(getPerson1());
console.log(getPerson1().greet());
console.log(getPerson2());
console.log(getPerson2().greet());

// Object destructuring
// Pretty useful when you work with API calls
var person = {
	name: 'Karen',
	age: 32,
	gender: 'female',
	hometown: 'Nebraska'
};

// Retrieve only portion of person object
var name = person.name;
var age = person.age; // same as var name = person.name; var age = person.age;

console.log(name, age);

// It can be used even in function argument!
function getPersonFromObj(_ref) {
	var name = _ref.name;
	var age = _ref.age;

	console.log('Hello ' + name + '. You are ' + age + '.');
}
getPersonFromObj(person);